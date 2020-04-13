import {Entity, Column, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Ministry {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

}