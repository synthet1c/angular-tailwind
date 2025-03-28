import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn
} from 'typeorm';
import {UserEntity} from './user.entity';
import {ChannelEntity} from './channel.entity';
import {ChatEntity} from './chat.entity';
import {Chatter} from '../../shared/models';

@Entity()
export class ChatterEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @ManyToOne(() => UserEntity, (user) => user.chatters)
  @JoinColumn()
  user!: UserEntity;

  @ManyToOne(() => ChannelEntity, (channel) => channel.id)
  @JoinColumn()
  channel!: ChannelEntity;

  @Column()
  nickname!: string;

  @CreateDateColumn()
  createdAt!: Date;

  @DeleteDateColumn()
  deletedAt!: Date

  @OneToMany(() => ChatEntity, (chat) => chat.chatter)
  chats!: ChatEntity[];

  static create(chatter: Partial<Chatter>) {
    const newChatter = new ChatterEntity();
    Object.assign(newChatter, chatter);
    return newChatter;
  }
}
