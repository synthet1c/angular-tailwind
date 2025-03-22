import {Chat} from '../../entities/chat.entity';
import {Observable} from 'rxjs';

export interface ChatServiceInterface {
  getChats(): Observable<Chat[]>
  createChat(chat: Partial<Chat>): Observable<Chat>
}
