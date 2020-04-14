import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export default class Photo {

  @PrimaryGeneratedColumn()
  id: number;

  @Column("text")
  name: string;

  @Column("text")
  description: string;

  @Column('text',{nullable:true})
  filename: string;

  @Column("double")
  views: number;

  // @Column()
  // isPublished: boolean;
}