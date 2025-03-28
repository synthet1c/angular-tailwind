import {Channel} from './channel.model';
import {Chatter} from './chatter.model';

export namespace User {

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
    channels: Channel.Model[]
    chatters: Chatter.Model[];
  }

  export class Model implements iUser {
    id!: string;
    username!: string;
    avatarUrl?: string;
    createdAt!: Date;
    deletedAt!: Date;
    updatedAt!: Date;
  }

  export class AuthModel extends Model implements iAuthUser {
    password!: string;
    channels!: Channel.Model[]
    chatters!: Chatter.Model[];
  }


}

