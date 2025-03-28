import {Injectable} from '@angular/core';
import {DataSource, EntityTarget, Repository} from 'typeorm';
import {ChannelEntity, ChatEntity, ChatConfigEntity, ChatterEntity, EpisodeEntity, UserEntity} from '../../server/entities';

const entities = [
  UserEntity,
  ChannelEntity,
  ChatConfigEntity,
  ChatterEntity,
  ChatEntity,
  EpisodeEntity,
];

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  private dataSource!: DataSource;

  constructor() {
    this.initializeDatabase().then(() => {
      console.log('DatabaseService:initialized');
    });
  }

  async initialize () {
    return this.dataSource.initialize();
  }

  isConnected() {
    return this.dataSource.isInitialized;
  }

  private async initializeDatabase() {

    this.dataSource = new DataSource({
      type: 'sqlite',
      database: 'database.sqlite',
      entities,
    });

    return this.dataSource.initialize();
  }

  async repository<T>(entity: EntityTarget<T>): Promise<Repository<T>> {
    if (!this.dataSource.isInitialized) {
      await this.dataSource.initialize();
    }
    return this.dataSource.getRepository<T>(entity);
  }
}
