import {Module} from '@nestjs/common';
import {ChatNestService} from '#server/services/chat.nest.service';
import {ChannelEntity, ChatConfigEntity, ChatEntity, ChatterEntity, EpisodeEntity, UserEntity} from '#entities';
import {TypeOrmModule} from '@nestjs/typeorm';
import {ChatGateway} from '#server/gateways/chat.gateway';

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
    ChatNestService,
  ]
})
export class ChatNestModule {}
