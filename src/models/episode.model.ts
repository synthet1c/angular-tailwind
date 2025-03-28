import {Channel} from './channel.model';
import {Chat} from './chat.model';
import {Timezone} from '../models';

export interface Episode {
  id: number;
  title: string;
  createdAt: Date;
  start: Date;
  end: Date;
  timezone: Timezone;
  channel: Channel;
  chats: Chat[];
}
