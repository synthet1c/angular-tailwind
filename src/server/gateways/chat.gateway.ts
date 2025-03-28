import {
  MessageBody,
  OnGatewayConnection,
  OnGatewayDisconnect, SubscribeMessage,
  WebSocketGateway,
  WebSocketServer
} from '@nestjs/websockets';
import {Server} from 'socket.io';
import {ChatNestService} from '#services/chat/chat.nest.service';
import {Observable, of} from 'rxjs';
import {ChatEntity} from '#entities';

export interface GatewayAction {
  action: string;
  data: unknown;
}

export namespace ChatGateWayActions {
  export interface getChats {
    take?: number;
    page?: number;
  }
}

@WebSocketGateway({
  namespace: '/chats',
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

  @SubscribeMessage('action')
  handleAction(@MessageBody() body: GatewayAction): Observable<ChatEntity[]> {
    switch (body.action) {
      case 'GET_CHATS': return this.getChats(body.data);
    }
    return of(null);
  }


  @SubscribeMessage('getChats')
  getChats({ take, page }: ChatGateWayActions.getChats): Observable<ChatEntity[]> {
    return this.chatService.getChats({ take, page })
  }


}
