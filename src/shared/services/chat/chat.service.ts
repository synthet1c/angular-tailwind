import {inject, Inject, Injectable, PLATFORM_ID} from '@angular/core';
import {Chat} from '#models';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {SortService} from '#services/sort/sort.service';
import {SocketService} from '#services/socket/socket.service';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  chats$ = new BehaviorSubject<Chat.Model[]>([]);
  socketService = inject(SocketService);
  private http = inject(HttpClient);
  private sortService = inject(SortService);

  getChats(): Observable<Chat.Model[]> {
    this.http.get<Chat.Model[]>('/api/chats').subscribe((chats) => this.chats$.next(chats));
    return this.chats$;
  }

  createChat(chat: Partial<Chat.Model>): Observable<Chat.Model> {
    return this.http.post<Chat.Model>('/api/chats', chat);
  }

  sort(algorithm: Chat.Sort) {
    const chats = this.chats$.getValue();
    const sort = this.sortService.getAlgorithm(algorithm);
    this.socketService.get('sort', algorithm);
    this.socketService.get<Chat.Model[]>('getChats', { take: 10, page: 1 })
      .subscribe((chats) => {
        console.log('SocketService.getChats', chats);
      });
    this.chats$.next(sort(chats))
  }
}
