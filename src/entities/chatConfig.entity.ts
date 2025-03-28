import {Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn} from 'typeorm';
import {ChannelEntity} from './channel.entity';

@Entity()
export class ChatConfigEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @ManyToOne(() => ChannelEntity, (channel) => channel.chatConfigs)
  @JoinColumn()
  channel!: ChannelEntity;

  @Column()
  ruleName!: string; // e.g., "Message Length Pricing", "Video Upload"

  @Column()
  description!: string; // Optional description of the rule

  @Column("boolean", { default: false })
  subscriberOnly!: boolean; // Optional description of the rule

  @Column("boolean", { default: false })
  appliesToVideo!: boolean; // Does this rule apply to video content?

  @Column("decimal", { precision: 10, scale: 2, default: 0 })
  price!: number; // Base price for this rule

  @Column("decimal", { precision: 10, scale: 2, default: 0, nullable: true })
  pricePerChar?: number; // For rules related to message length (optional)

  @Column("decimal", { precision: 10, scale: 2, default: 0, nullable: true })
  pricePerVideoSecond?: number; // For rules related to video length (optional)

  @Column({ nullable: true })
  maxChars?: number; // Max allowed characters for this configuration (optional)

  @Column({ nullable: true })
  videoLength?: number; // Max allowed video duration for this configuration (optional)
}
