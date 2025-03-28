import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  DeleteDateColumn
} from 'typeorm';
import {ChannelEntity} from './channel.entity';
import {ChatterEntity} from './chatter.entity';
import {User} from '#models';

@Entity()
export class UserEntity {
  @PrimaryGeneratedColumn("uuid")
  id!: string; // Unique user ID

  @Column({ unique: true })
  username!: string; // Username, must be unique

  @Column()
  password!: string; // Password (should ideally be hashed)

  @Column({ default: "" })
  avatarUrl?: string; // Profile picture or avatar URL

  @OneToMany(() => ChannelEntity, (channel) => channel.owner)
  channels!: ChannelEntity[];

  @OneToMany(() => ChatterEntity, (chatter) => chatter.user)
  chatters!: ChatterEntity[];

  @CreateDateColumn()
  createdAt!: Date; // When the user record was created

  @DeleteDateColumn()
  deletedAt!: Date

  @UpdateDateColumn()
  updatedAt!: Date; // When the user record was last updated

  static create(user: Partial<User.iUser | User.iAuthUser>) {
    const newUser = new UserEntity();
    Object.assign(newUser, user);
    return newUser;
  }
}
