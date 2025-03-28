import {ChatEntity} from '#entities';
import {Observable} from 'rxjs';
import {Chat} from '#models';

export interface ChatServiceInterface {
  getChats(params?: Chat.params.getChats): Observable<ChatEntity[]>;
  createChat(chat: Partial<ChatEntity>): Observable<ChatEntity>;
}
