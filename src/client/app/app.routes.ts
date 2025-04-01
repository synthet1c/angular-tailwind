import { Routes } from '@angular/router';
import {AdminChannelPage} from '#shared/pages/admin/channel/admin-channel.page';
import {ChannelPage} from '#shared/pages/client/channel/channel.page';
import {UserRegistrationComponent} from '#shared/pages/client/user-registration/user-registration.component';

export const routes: Routes = [
  {
    path: 'registration',
    component: UserRegistrationComponent,
  },
  {
    path: 'channels/:channel',
    component: AdminChannelPage,
  },
  {
    path: ':channel',
    component: ChannelPage,
  }
];
