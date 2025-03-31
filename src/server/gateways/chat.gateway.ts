import {
  MessageBody,
  OnGatewayConnection,
  OnGatewayDisconnect,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer
} from '@nestjs/websockets';
import {Server} from 'socket.io';
import {ChatNestService} from '#server/services/chat.nest.service';
import {Observable, of} from 'rxjs';
import {ChatEntity} from '#entities';
import { Chat } from '#models';

@WebSocketGateway(8080, {
  namespace: 'chats',
  cors: true,
})
export class ChatGateway implements OnGatewayConnection, OnGatewayDisconnect {

  @WebSocketServer()
  private server: Server;

  constructor(
    private chatService: ChatNestService
  ) {}

  handleConnection(client: any): void {
    console.log(`Client connected: ${client.id}`);
    // client.emit('chats', this.chats);
  }

  handleDisconnect(client: any): void {
    console.log(`Client disconnected: ${client.id}`);
  }

  @SubscribeMessage('getChats')
  getChats(@MessageBody() { take, page }: Chat.params.getChats): Observable<ChatEntity[]> {
    return this.chatService.getChats({ take, page })
  }

  @SubscribeMessage('sort')
  sort(@MessageBody() algorithm: Chat.Sort): Observable<Chat.Sort> {
    console.log('ChatGateway:sort', algorithm);
    if (algorithm in Chat.Sort) {
      console.log('ChatGateway:sort in Chat.Sort', algorithm);
    }
    return of(algorithm);
  }

}
