import { Injectable } from '@nestjs/common';
import {ChatServiceInterface} from './chat.service.interface';
import {ChatEntity} from '../../server/entities';
import {from, Observable, of} from 'rxjs';
import {Repository} from 'typeorm';
import {InjectRepository} from '@nestjs/typeorm';

@Injectable()
export class ChatNestService implements ChatServiceInterface {

  constructor(
    @InjectRepository(ChatEntity) private repository: Repository<ChatEntity>
  ) { }

  getChats(): Observable<ChatEntity[]> {
    return from(
      this.repository.find({
        take: 10,
        relations: ['chatter', 'channel'],
      })
    );
  }

  createChat(chat: Partial<ChatEntity>): Observable<ChatEntity> {
    const newChat = this.repository.create(chat);
    return from(this.repository.save(newChat));
  }

}
