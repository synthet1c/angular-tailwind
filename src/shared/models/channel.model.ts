import {Chat, User, Episode, ChatConfig} from './index';

export namespace Channel {
  export interface Model {
    id: number;
    name: string;
    url: string;
    description: string;
    owner: User.Model;
    createdAt: Date;
    deletedAt: Date;
    chats: Chat.Model[];
    chatConfigs: ChatConfig.Model[];
    episodes: Episode.Model[];
  }
}

