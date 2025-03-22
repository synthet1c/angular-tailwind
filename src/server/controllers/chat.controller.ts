import {Body, Controller, Get, Post} from '@nestjs/common';
import {ChatService} from '../../services/chat/chat.service';
import {Observable, of} from 'rxjs';
import {Chat} from '../../entities';

@Controller('/chats')
export class ChatController {

  constructor(
    private readonly chatService: ChatService,
  ) {}

  @Get()
  getChats(): Observable<any[]> {
    return of([{
      message: 'chats'
    }])
    return this.chatService.getChats();
  }

  @Post()
  createChat(@Body() chatData: Partial<Chat>): Observable<Chat> {
    return this.chatService.createChat(chatData);
  }

}
