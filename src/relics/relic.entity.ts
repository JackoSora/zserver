import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('relics')
export class Relic {
  @PrimaryGeneratedColumn('uuid')
  RelicUniqueID: string;

  @Column({ name: 'set_name' })
  Set: string;

  @Column()
  Mainstat: string;

  @Column('int')
  Slot: number;

  @Column('simple-array')
  Rolls: string[];
}