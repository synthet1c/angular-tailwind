import {Module as NestModule, OnModuleInit} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {Channel, ChatConfig, Chat, Chatter, User, Episode} from '../entities';
import {ChatController} from './controllers/chat.controller';
import {ChatService} from '../services/chat/chat.service';
import {HelloController} from './controllers/hello.controller';

const entities = [
  User,
  Channel,
  ChatConfig,
  Chatter,
  Chat,
  Episode,
];

@NestModule({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'database.sqlite',
      entities,
      synchronize: true,
    }),
    TypeOrmModule.forFeature(entities)
  ],
  controllers: [
    ChatController,
    HelloController,
  ],
  providers: [
    ChatService,
  ]
})
export class AppModuleNest implements OnModuleInit {
  onModuleInit() {
    console.log(`OnModuleInit:${this.constructor.name}`, this);
  }
}
