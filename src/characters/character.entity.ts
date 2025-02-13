import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('characters')
export class Character {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ nullable: false }) // Ensure the column is NOT NULL
    name: string;

    @Column({ default: 60 })
    level: number;

    @Column()
    hp: number;

    @Column()
    def: number;

    @Column()
    atk: number;

    @Column({ type: 'float' })
    crate: number;

    @Column({ type: 'float' })
    cdmg: number;

    @Column({ type: 'float' })
    pen: number;

    @Column({ type: 'float' })
    impact: number;

    @Column({ type: 'float' })
    anomaly: number;

    @Column({ type: 'float' })
    energy_regen: number;
}