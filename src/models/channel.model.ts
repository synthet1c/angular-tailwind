import {Chat, User, Episode, ChatConfig} from './';

export interface Channel {
  id: number;
  name: string;
  url: string;
  description: string;
  owner: User;
  createdAt: Date;
  deletedAt: Date;
  chats: Chat[];
  chatConfigs: ChatConfig[];
  episodes: Episode[];
}
