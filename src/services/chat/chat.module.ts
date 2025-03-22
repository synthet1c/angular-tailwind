import {Injector, NgModule, PLATFORM_ID} from '@angular/core';
import {CommonModule, isPlatformBrowser, isPlatformServer} from '@angular/common';
import { ChatServiceInterface } from './chat.service.interface';
import {ChatServerService} from './chat.server.service';
import {ChatService} from './chat.service';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    {
      provide: ChatService,
      deps: [PLATFORM_ID, Injector],
      useFactory: (platformId: Object, injector: Injector): ChatService | ChatServerService => {
        if (isPlatformBrowser(platformId)) {
          return injector.get(ChatService);
        } else if (isPlatformServer(platformId)) {
          return injector.get(ChatServerService);
        }
        throw new Error('Platform not supported');
      }
    }
  ]
})
export class ChatModule { }
