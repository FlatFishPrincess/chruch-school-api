import { DeleteResult, Repository } from 'typeorm';

import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { DepartmentEntity } from '../department/department.entity';
import { MinistryEntity } from './ministry.entity';

@Injectable()
export class MinistryService {
  private readonly logger = new Logger(MinistryService.name);
  
  constructor(
    @InjectRepository(MinistryEntity)
    private readonly ministryRepository: Repository<MinistryEntity>,
    @InjectRepository(DepartmentEntity)
    private readonly departmentRepository: Repository<DepartmentEntity>,
  ){}

  async findAll(query): Promise<[MinistryEntity[], number]> {
    return await this.ministryRepository.findAndCount();
  }

  async findById(id: string): Promise<MinistryEntity | undefined> {
    return await this.ministryRepository.findOne(id);
  }

  async save(ministryData: MinistryEntity): Promise<MinistryEntity | undefined> {
    const ministry = new MinistryEntity();
    ministry.name = ministryData.name;
    ministry.description = ministryData.description;
    const departments = await this.departmentRepository.findByIds(ministryData.departments);
    ministry.departments = departments || [];
    this.logger.log('ministry to be saved' +  ministry);
    return await this.ministryRepository.save(ministry);
  }

  async update(ministry: MinistryEntity): Promise<MinistryEntity | undefined> {
    return await this.save(ministry);
  }

  async delete(id: string): Promise<DeleteResult> {
    return await this.ministryRepository.delete(id);
  }
}
