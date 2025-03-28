import {Channel} from './channel.model';
import {Chat} from './chat.model';
import {Utils} from './index';

export namespace Episode {

  export interface Model {
    id: number;
    title: string;
    createdAt: Utils.Date;
    start: Utils.Date;
    end: Utils.Date;
    timezone: Utils.Timezone;
    channel: Channel.Model;
    chats: Chat.Model[];
  }
}

