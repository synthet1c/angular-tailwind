import {Module as NestModule, OnModuleInit} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {ChannelEntity, ChatConfigEntity, ChatEntity, ChatterEntity, UserEntity, EpisodeEntity} from '#entities';
import {ChatController} from '#controllers/chat.controller';
import {HelloController} from '#controllers/hello.controller';
import {ChatNestService} from '#server/services/chat.nest.service';
import {GatewaysModule} from '#server/gateways/gateways.module';

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
    TypeOrmModule.forFeature(entities),
    // GatewaysModule,
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
