import {Body, Controller, Get, Post} from '@nestjs/common';
import {Observable, of} from 'rxjs';
import {ChatEntity} from '../entities';
import {ChatNestService} from '../../services/chat/chat.nest.service';

@Controller('/chats')
export class ChatController {

  constructor(
    private readonly chatService: ChatNestService,
  ) {}

  @Get()
  getChats(): Observable<ChatEntity[]> {
    return this.chatService.getChats();
  }

  @Post()
  createChat(@Body() chatData: Partial<ChatEntity>): Observable<ChatEntity> {
    return this.chatService.createChat(chatData);
  }

}
