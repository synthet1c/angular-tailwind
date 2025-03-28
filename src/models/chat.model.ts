import {Channel, Chatter, Episode, Time} from './';

export enum ChatStatus {
  NEW = 'NEW',
  AUTHORIZING = 'AUTHORIZING',
  PENDING = 'PENDING',
  COMPLETE = 'COMPLETE',
  REFUNDED = 'REFUNDED',
}

export interface Chat {
  id: number;
  channel: Channel;
  chatter: Chatter;
  price: number;
  message: string;
  status: string | ChatStatus;
  link: string;
  startTime: Time;
  videoLength: number;
  createdAt: Date;
  deletedAt: Date;
  episode: Episode;
}
