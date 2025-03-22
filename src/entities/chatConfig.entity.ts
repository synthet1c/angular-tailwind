import {Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn} from 'typeorm';
import {Channel} from './channel.entity';

@Entity()
export class ChatConfig {
  @PrimaryGeneratedColumn()
  id!: number;

  @ManyToOne(() => Channel, (channel) => channel.chatConfigs)
  @JoinColumn()
  channel!: Channel;

  @Column()
  ruleName!: string; // e.g., "Message Length Pricing", "Video Upload"

  @Column()
  description!: string; // Optional description of the rule

  @Column("boolean", { default: false })
  appliesToVideo!: boolean; // Does this rule apply to video content?

  @Column("decimal", { precision: 10, scale: 2, default: 0 })
  basePrice!: number; // Base price for this rule

  @Column("decimal", { precision: 10, scale: 2, default: 0, nullable: true })
  pricePerChar?: number; // For rules related to message length (optional)

  @Column("decimal", { precision: 10, scale: 2, default: 0, nullable: true })
  pricePerVideoSecond?: number; // For rules related to video length (optional)

  @Column({ nullable: true })
  maxChars?: number; // Max allowed characters for this configuration (optional)

  @Column({ nullable: true })
  maxVideoLength?: number; // Max allowed video duration for this configuration (optional)
}
