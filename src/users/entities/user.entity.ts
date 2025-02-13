import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    string: number;

    @Column({ unique: true })
    username: string;

    @Column()
    password: string;

    @Column({unique: true})
    email: string;

    @Column({ default: true })
    isActive: boolean;
}