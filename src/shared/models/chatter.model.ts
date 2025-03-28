import {User} from './user.model';
import {Channel} from './channel.model';
import {Chat} from './chat.model';

export interface Chatter {
  id: number;
  user: User;
  channel: Channel;
  nickname: string;
  createdAt: Date;
  deletedAt: Date;
  chats: Chat[];
}
