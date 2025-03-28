import {DataSource} from 'typeorm';
import {ChatEntity, ChatConfigEntity, UserEntity, ChannelEntity, ChatterEntity} from '../server/entities';

export const AppDataSource = new DataSource({
  type: "sqlite",
  database: "chat",
  synchronize: true,
  logging: true,
  entities: [
    UserEntity,
    ChannelEntity,
    ChatterEntity,
    ChatConfigEntity,
    ChatEntity,
  ],
  subscribers: [],
  migrations: [],
})
