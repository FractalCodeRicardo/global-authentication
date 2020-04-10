import {Entity, Column, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class AccessKey {

    static STATUS_LIVE: number = 0
    static STATUS_DEAD: number = 1

    @PrimaryGeneratedColumn()
    key: string;

    @Column()
    status: number;

}