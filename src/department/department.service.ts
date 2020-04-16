import { DeleteResult, Repository } from 'typeorm';

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { DepartmentEntity } from './department.entity';

@Injectable()
export class DepartmentService {
  constructor(
    @InjectRepository(DepartmentEntity)
    private readonly departmentRepository: Repository<DepartmentEntity>,
  ){}

  async findAll(query): Promise<[DepartmentEntity[], number]> {
    return await this.departmentRepository.findAndCount();
  }

  async findById(id: string): Promise<DepartmentEntity | undefined> {
    return await this.departmentRepository.findOne(id);
  }

  async save(department: DepartmentEntity): Promise<DepartmentEntity | undefined> {
    return await this.departmentRepository.save(department);
  }

  async update(department: DepartmentEntity): Promise<DepartmentEntity | undefined> {
    return await this.save(department);
  }

  async delete(id: string): Promise<DeleteResult> {
    return await this.departmentRepository.delete(id);
  }
}
