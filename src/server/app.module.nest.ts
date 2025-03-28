import {Module as NestModule, OnModuleInit} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {ChannelEntity, ChatConfigEntity, ChatEntity, ChatterEntity, UserEntity, EpisodeEntity} from '../entities';
import {ChatController} from './controllers/chat.controller';
import {HelloController} from './controllers/hello.controller';
import {ChatNestService} from '../services/chat/chat.nest.service';

const entities = [
  UserEntity,
  ChannelEntity,
  ChatConfigEntity,
  ChatterEntity,
  ChatEntity,
  EpisodeEntity,
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
    ChatNestService
  ]
})
export class AppModuleNest implements OnModuleInit {
  onModuleInit() {
    console.log(`OnModuleInit:${this.constructor.name}`, this);
  }
}
