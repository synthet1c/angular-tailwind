import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany, CreateDateColumn
} from 'typeorm';
import { Channel } from './channel.entity';
import { Chat } from './chat.entity';

@Entity()
export class Episode {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  title!: string;

  @CreateDateColumn()
  createdAt!: Date;

  @ManyToOne(() => Channel, (channel: Channel) => channel.episodes, { onDelete: 'CASCADE' })
  channel!: Channel;

  @OneToMany(() => Chat, (chat: Chat) => chat.episode, { cascade: true })
  chats!: Chat[];
}
