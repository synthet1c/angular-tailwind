import {Channel, Chatter, Episode, Utils} from './index';

export namespace Chat {

  export enum Status {
    NEW = 'NEW',
    AUTHORIZING = 'AUTHORIZING',
    PENDING = 'PENDING',
    COMPLETE = 'COMPLETE',
    REFUNDED = 'REFUNDED',
  }

  export interface Model {
    id: number;
    channel: Channel.Model;
    chatter: Chatter.Model;
    price: number;
    message: string;
    status: string | Status;
    link: string;
    startTime: Utils.Time;
    videoLength: number;
    createdAt: Date;
    deletedAt: Date;
    episode: Episode.Model;
  }

  export namespace params {
    export interface getChats {
      take?: number;
      page?: number;
    }
  }

}
