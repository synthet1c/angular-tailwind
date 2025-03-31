import { Module } from '@nestjs/common';
import { ChatGateway } from './chat.gateway';
import {ChannelEntity, ChatConfigEntity, ChatEntity, ChatterEntity, EpisodeEntity, UserEntity} from '#entities';
import {TypeOrmModule} from '@nestjs/typeorm';
import {ChatNestService} from '#server/services/chat.nest.service';

const entities = [
  UserEntity,
  ChannelEntity,
  ChatConfigEntity,
  ChatterEntity,
  ChatEntity,
  EpisodeEntity,
];

@Module({
  imports: [
    TypeOrmModule.forFeature(entities),
  ],
  providers: [
    ChatGateway,
    ChatNestService,
  ],
})
export class GatewaysModule {}
