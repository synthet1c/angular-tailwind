import {Channel} from './channel.model';

export namespace ChatConfig {
  export interface Model {
    id: number;
    channel: Channel.Model;
    ruleName: string;
    description: string;
    subscriberOnly: boolean;
    appliesToVideo: boolean;
  }

}
