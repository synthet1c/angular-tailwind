import {
  Column,
  CreateDateColumn,
  DataSource,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  Repository
} from 'typeorm';
import {Channel} from './channel.entity';
import {Chatter} from './chatter.entity';
import {Episode} from './episode.entity';

@Entity()
export class Chat {
  @PrimaryGeneratedColumn()
  id!: number;

  @ManyToOne(() => Channel, (channel) => channel.chats)
  @JoinColumn()
  channel!: Channel;

  @ManyToOne(() => Chatter, (chatter) => chatter.chats)
  @JoinColumn()
  chatter!: Chatter;

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

  @ManyToOne(() => Episode, (episode) => episode.chats, { onDelete: 'CASCADE' })
  episode!: Episode;

}
