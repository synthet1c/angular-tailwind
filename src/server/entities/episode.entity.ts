import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany, CreateDateColumn
} from 'typeorm';
import { ChannelEntity } from './channel.entity';
import { ChatEntity } from './chat.entity';
import {Episode, Utils} from '#models';

@Entity()
export class EpisodeEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  title!: string;

  @CreateDateColumn()
  createdAt!: Date;

  @Column()
  start!: Date

  @Column()
  end!: Date

  @Column()
  timezone!: Utils.Timezone;

  @ManyToOne(() => ChannelEntity, (channel: ChannelEntity) => channel.episodes, { onDelete: 'CASCADE' })
  channel!: ChannelEntity;

  @OneToMany(() => ChatEntity, (chat: ChatEntity) => chat.episode, { cascade: true })
  chats!: ChatEntity[];

  static create(episode: Partial<Episode.Model>) {
    const newEpisode = new EpisodeEntity();
    Object.assign(newEpisode, episode);
    return newEpisode;
  }
}
