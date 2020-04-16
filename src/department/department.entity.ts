import { Place } from 'src/constant/enumeration/Place';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

import { MinistryEntity } from '../ministry/ministry.entity';

@Entity('department')
export class DepartmentEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column({
    type: "enum",
    enum: Place,
    default: Place.DREAM
  })
  place: Place;

  @Column()
  departmentType: string;

  @ManyToOne(type => MinistryEntity, ministry => ministry.departments)
  ministry: MinistryEntity;
}