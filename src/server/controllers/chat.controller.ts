import {Body, Controller, Get, Param, Post, Query} from '@nestjs/common';
import {Observable, of} from 'rxjs';
import {ChatEntity} from '#entities';
import {ChatNestService} from '#server/services/chat.nest.service';

@Controller('/chats')
export class ChatController {

  constructor(
    private readonly chatService: ChatNestService,
  ) {}

  @Get()
  getChats(@Query('channel') channel: string): Observable<ChatEntity[]> {
    console.log('ChatController', channel);
    return this.chatService.getChats({ channel });
  }

  @Post()
  createChat(@Body() chatData: Partial<ChatEntity>): Observable<ChatEntity> {
    return this.chatService.createChat(chatData);
  }

}
