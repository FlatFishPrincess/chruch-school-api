import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

import { DepartmentEntity } from '../department/department.entity';

@Entity('ministry')
export class MinistryEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @OneToMany(type => DepartmentEntity, department => department.ministry)
  departments: DepartmentEntity[]
}