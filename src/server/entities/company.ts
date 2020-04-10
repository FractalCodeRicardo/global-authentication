import {Entity, Column, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Company {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    domain: string;

    @Column()
    password: string;

    @Column()
    accessKey: string;
}