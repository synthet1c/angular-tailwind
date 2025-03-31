import { Routes } from '@angular/router';
import {AdminChannelPage} from '#shared/pages/admin/channel/admin-channel.page';
import {ChannelPage} from '#shared/pages/client/channel/channel.page';

export const routes: Routes = [
  {
    path: 'channels/:channel',
    component: AdminChannelPage,
  },
  {
    path: ':channel',
    component: ChannelPage,
  }
];
