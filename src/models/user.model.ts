import {Channel} from './channel.model';
import {Chatter} from './chatter.model';

export interface iUser {
  id: string;
  username: string;
  avatarUrl?: string;
  createdAt: Date;
  deletedAt: Date;
  updatedAt: Date;
}

export interface iAuthUser extends iUser {
  password: string;
  channels: Channel[]
  chatters: Chatter[];
}

export class User implements iUser {
  id!: string;
  username!: string;
  avatarUrl?: string;
  createdAt!: Date;
  deletedAt!: Date;
  updatedAt!: Date;
}

export class AuthUser extends User implements iAuthUser {
  password!: string;
  channels!: Channel[]
  chatters!: Chatter[];
}
