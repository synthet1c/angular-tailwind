import {Inject, Injectable, PLATFORM_ID} from '@angular/core';
import {Chat} from '#models';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(
    private http: HttpClient,
    @Inject(PLATFORM_ID) private platform: object,
  ) {
    console.log({ platform });
  }

  getChats(): Observable<Chat[]> {
    return this.http.get<Chat[]>('/api/chats');
  }

  createChat(chat: Partial<Chat>): Observable<Chat> {
    return this.http.post<Chat>('/api/chats', chat);
  }
}
