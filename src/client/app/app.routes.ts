import { Routes } from '@angular/router';
import {ChannelPage} from '#shared/pages/channel/channel.page';

export const routes: Routes = [
  {
    path: 'channels/:channel',
    component: ChannelPage,
  }
];
