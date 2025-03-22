import {Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn} from 'typeorm';
import {User} from './user.entity';
import {Channel} from './channel.entity';
import {Chat} from './chat.entity';

@Entity()
export class Chatter {
  @PrimaryGeneratedColumn()
  id!: number;

  @ManyToOne(() => User, (user) => user.chatters)
  @JoinColumn()
  user!: User;

  @ManyToOne(() => Channel, (channel) => channel.id)
  @JoinColumn()
  channel!: Channel;

  @Column()
  nickname!: string;

  @CreateDateColumn()
  createdAt!: Date;

  @OneToMany(() => Chat, (chat) => chat.chatter)
  chats!: Chat[];
}
