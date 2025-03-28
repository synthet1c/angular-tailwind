import {User} from './user.model';
import {Channel} from './channel.model';
import {Chat} from './chat.model';

export namespace Chatter {
  export interface Model {
    id: number;
    user: User.Model;
    channel: Channel.Model;
    nickname: string;
    createdAt: Date;
    deletedAt: Date;
    chats: Chat.Model[];
  }
}

