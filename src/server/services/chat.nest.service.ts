import { Injectable } from '@nestjs/common';
import {ChatServiceInterface} from '#services/chat/chat.service.interface';
import {ChatEntity, ChatterEntity} from '#entities';
import {from, Observable} from 'rxjs';
import {Repository} from 'typeorm';
import {InjectRepository} from '@nestjs/typeorm';
import {Chat, Chatter} from '#models';


@Injectable()
export class ChatNestService implements ChatServiceInterface {

  constructor(
    @InjectRepository(ChatEntity) private repository: Repository<ChatEntity>,
    @InjectRepository(ChatterEntity) private chatterRepository: Repository<ChatterEntity>
  ) { }


  getChats({ channel, take = 10, page = 0 }: Chat.params.getChats = { channel: null }): Observable<ChatEntity[]> {
    return from(
      this.repository.find({
        take,
        skip: take * page,
        where: {
          channel: {
            url: channel
          },
        },
        relations: ['chatter', 'channel'],
      })
    );
  }

  createChat(chat: Partial<ChatEntity>): Observable<ChatEntity> {
    const newChat = this.repository.create({
      ...chat
    });
    // return from(
    //   this.getChatterMetrics({ chatterId: chat.chatter.id })
    // )
    // .pipe(
    //   concatMap((chatter) => {
    //
    //   })
    // )
    return from(this.repository.save(newChat));
  }

  private createdAtLessThan = <T extends { createdAt: Date }>(value: number | Date) => (obj: T): boolean => {
    const createdAt = new Date(obj.createdAt).getTime();
    const expected = new Date(value).getTime();
    return createdAt < expected;
  }

  async getChatterWeight (chatterId: number){
    const metrics = await this.getChatterMetrics(chatterId);
    return this.calculateChatterWeight(metrics);
  }

  async getChatterMetrics(chatterId: number): Promise<Chatter.Metrics> {

    const oneDayAgo = new Date(Date.now() - 24 * 60 * 60 * 1000);
    const oneWeekAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);
    const oneMonthAgo = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000);

    const totalChats = await this.getTotalChats(chatterId);
    const chatsInLastMonth: Chat.Model[] = await this.getChatsWithinTimeFrame(chatterId, oneMonthAgo);
    const chatsInLastWeek: Chat.Model[] = chatsInLastMonth.filter(this.createdAtLessThan(oneWeekAgo));
    const chatsInLastDay: Chat.Model[] = chatsInLastWeek.filter(this.createdAtLessThan(oneDayAgo));

    return {
      totalChats,
      chatsInLastMonth: chatsInLastMonth.length,
      chatsInLastWeek: chatsInLastWeek.length,
      chatsInLastDay: chatsInLastDay.length,
    };
  }

  calculateChatterWeight({ chatsInLastDay, chatsInLastWeek, chatsInLastMonth, totalChats }: Chatter.Metrics): number {
    // Weights and power level calculation
    const chatWeight = 0.4;
    const totalChatWeight = 0.6;
    const powerLevel = (chatsInLastDay * 1.5 + chatsInLastWeek * 1.2 + chatsInLastMonth) * chatWeight + totalChats * totalChatWeight;

    return powerLevel;
  }

  async getChatsWithinTimeFrame(chatterId: number, fromDate: Date): Promise<Chat.Model[]> {
    return this.repository
      .createQueryBuilder('chat')
      .where('chat.chatterId = :chatterId', { chatterId })
      .andWhere('chat.createdAt > :fromDate', { fromDate })
      .getMany()
  }

  async getTotalChats(chatterId: number): Promise<number> {
    return this.repository
      .createQueryBuilder('chat')
      .where('chat.chatterId = :chatterId', { chatterId })
      .getCount();
  }

}
