import {Injector, NgModule, PLATFORM_ID} from '@angular/core';
import {CommonModule, isPlatformBrowser, isPlatformServer} from '@angular/common';
import {ChatService} from './chat.service';
import {HttpClient} from '@angular/common/http';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  providers: [
    HttpClient,
    // {
    //   provide: ChatService,
    //   deps: [PLATFORM_ID, Injector],
    //   useFactory: (platformId: Object, injector: Injector): ChatService | ChatServerService => {
    //     console.log('Detected PLATFORM_ID:', platformId);
    //     if (isPlatformBrowser(platformId)) {
    //       console.log('Using ChatService for browser');
    //       return injector.get(ChatService);
    //     } else if (isPlatformServer(platformId)) {
    //       console.log('Using ChatServerService for server');
    //       return injector.get(ChatServerService);
    //     }
    //     throw new Error('Platform not supported');
    //   }
    // }
  ]
})
export class ChatModule { }
