import {Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn} from 'typeorm';
import {User} from './user.entity';
import {Chat} from './chat.entity';
import {ChatConfig} from './chatConfig.entity';
import {Episode} from './episode.entity';

@Entity()
export class Channel {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ unique: true })
  name!: string;

  @Column({ unique: true })
  url!: string;

  @Column()
  description!: string;

  @ManyToOne(() => User, (user) => user.channels)
  @JoinColumn()
  owner!: User;

  @CreateDateColumn()
  createdAt!: Date;

  @OneToMany(() => Chat, (chat: Chat) => chat.channel)
  chats!: Chat[];

  @OneToMany(() => ChatConfig, (chatConfig) => chatConfig.channel, {
    cascade: true,
  })
  chatConfigs!: ChatConfig[]; // Array of rules for chat pricing

  @OneToMany(() => Episode, (episode: Episode) => episode.channel, { cascade: true })
  episodes!: Episode[];
}
