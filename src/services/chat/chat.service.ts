import {Injectable} from '@angular/core';
import {Chat} from '../../entities';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private http: HttpClient) {}

  getChats(): Observable<Chat[]> {
    return this.http.get<Chat[]>('getChats');
  }

  createChat(chat: Partial<Chat>): Observable<Chat> {
    return this.http.post<Chat>('createChat', chat);
  }
}
