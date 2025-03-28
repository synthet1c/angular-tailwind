import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import {ChannelEntity} from './channel.entity';
import {ChatterEntity} from './chatter.entity';
import {EpisodeEntity} from './episode.entity';
import {Chat, ChatStatus} from '../shared/models';

@Entity()
export class ChatEntity implements Chat {
  @PrimaryGeneratedColumn()
  id!: number;

  @ManyToOne(() => ChannelEntity, (channel) => channel.chats)
  @JoinColumn()
  channel!: ChannelEntity;

  @ManyToOne(() => ChatterEntity, (chatter) => chatter.chats)
  @JoinColumn()
  chatter!: ChatterEntity;

  @Column()
  status!: string;

  @Column("decimal", { precision: 10, scale: 2 })
  price!: number; // Calculated final price of this chat message

  @Column()
  message!: string;

  @Column({ nullable: true })
  link!: string; // Optional video/media link

  @Column("time", { nullable: true })
  startTime!: string | null; // Optional start time for the video

  @Column("int", { nullable: true })
  videoLength!: number | null; // Length of the video in seconds (optional)

  @CreateDateColumn()
  createdAt!: Date;

  @DeleteDateColumn()
  deletedAt!: Date

  @ManyToOne(() => EpisodeEntity, (episode) => episode.chats, { onDelete: 'CASCADE' })
  episode!: EpisodeEntity;


  static create(chat: Partial<Chat>) {
    const newChat = new ChatEntity();
    Object.assign(newChat, chat);
    return newChat;
  }
}
