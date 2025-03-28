import {Channel} from './channel.model';

export interface ChatConfig {
  id: number;
  channel: Channel;
  ruleName: string;
  description: string;
  subscriberOnly: boolean;
  appliesToVideo: boolean;
}
