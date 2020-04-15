import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('ministry')
export class MinistryEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

}