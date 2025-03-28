import {ChatEntity} from '../../../server/entities/chat.entity';
import {Observable} from 'rxjs';

export interface ChatServiceInterface {
  getChats(): Observable<ChatEntity[]>
  createChat(chat: Partial<ChatEntity>): Observable<ChatEntity>
}
