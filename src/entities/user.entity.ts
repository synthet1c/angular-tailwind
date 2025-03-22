import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany} from 'typeorm';
import {Channel} from './channel.entity';
import {Chatter} from './chatter.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn("uuid")
  id!: string; // Unique user ID

  @Column({ unique: true })
  username!: string; // Username, must be unique

  @Column()
  password!: string; // Password (should ideally be hashed)

  @Column({ default: "" })
  avatarUrl?: string; // Profile picture or avatar URL

  @OneToMany(() => Channel, (channel) => channel.owner)
  channels!: Channel[];

  @OneToMany(() => Chatter, (chatter) => chatter.user)
  chatters!: Chatter[];

  @CreateDateColumn()
  createdAt!: Date; // When the user record was created

  @UpdateDateColumn()
  updatedAt!: Date; // When the user record was last updated
}
