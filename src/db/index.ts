import {DataSource} from 'typeorm';
import {Chat, ChatConfig, User, Channel, Chatter} from '../entities';

export const AppDataSource = new DataSource({
  type: "sqlite",
  database: "chat",
  synchronize: true,
  logging: true,
  entities: [
    User,
    Channel,
    Chatter,
    ChatConfig,
    Chat,
  ],
  subscribers: [],
  migrations: [],
})
