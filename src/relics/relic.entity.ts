import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Relic {
  @PrimaryGeneratedColumn('uuid')
  RelicUniqueID: string;

  @Column()
  Set: string;

  @Column()
  Mainstat: string;

  @Column('int')
  Slot: number;

  @Column('simple-array')
  Rolls: string[];
}