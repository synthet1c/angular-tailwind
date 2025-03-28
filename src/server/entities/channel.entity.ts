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
import {ChatEntity} from './chat.entity';
import {ChatConfigEntity} from './chatConfig.entity';
import {EpisodeEntity} from './episode.entity';
import {Channel} from '../../shared/models';

@Entity()
export class ChannelEntity implements Channel {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ unique: true })
  name!: string;

  @Column({ unique: true })
  url!: string;

  @Column()
  description!: string;

  @ManyToOne(() => UserEntity, (user) => user.channels)
  @JoinColumn()
  owner!: UserEntity;

  @CreateDateColumn()
  createdAt!: Date;

  @DeleteDateColumn()
  deletedAt!: Date

  @OneToMany(() => ChatEntity, (chat: ChatEntity) => chat.channel)
  chats!: ChatEntity[];

  @OneToMany(() => ChatConfigEntity, (chatConfig) => chatConfig.channel, {
    cascade: true,
  })
  chatConfigs!: ChatConfigEntity[]; // Array of rules for chat pricing

  @OneToMany(() => EpisodeEntity, (episode: EpisodeEntity) => episode.channel, { cascade: true })
  episodes!: EpisodeEntity[];

  static create(channel: Partial<ChannelEntity>) {
    const newChannel = new ChannelEntity();
    Object.assign(newChannel, channel);
    return newChannel;
  }

}
