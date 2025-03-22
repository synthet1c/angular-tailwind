import { Injectable } from '@nestjs/common';
import {ChatServiceInterface} from './chat.service.interface';
import {Chat} from '../../entities/chat.entity';
import {from, Observable, of} from 'rxjs';
import {Repository} from 'typeorm';
import {InjectRepository} from '@nestjs/typeorm';

@Injectable()
export class ChatServerService implements ChatServiceInterface {

  constructor(
    @InjectRepository(Chat) private repository: Repository<Chat>
  ) { }

  getChats(): Observable<Chat[]> {
    return from(
      this.repository.find({
        take: 10,
      })
    );
  }

  createChat(chat: Partial<Chat>): Observable<Chat> {
    const newChat = this.repository.create(chat);
    return from(this.repository.save(newChat));
  }

}
