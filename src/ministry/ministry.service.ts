import { DeleteResult, getRepository, Repository } from 'typeorm';

import { Injectable, Query } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { CreateMinistryDto } from './dto/create-ministry.dto';
import { MinistryEntity } from './ministry.entity';
import { Ministry, MinistryC } from './ministry.interface';

@Injectable()
export class MinistryService {
  constructor(
    @InjectRepository(MinistryEntity)
    private readonly ministryRepository: Repository<MinistryEntity>,
  ){}

  async findAll(query): Promise<[Ministry[], number]> {
    return await this.ministryRepository.findAndCount();
  }

  async findById(id: string): Promise<Ministry | undefined> {
    return await this.ministryRepository.findOne(id);
  }

  async save(ministry: CreateMinistryDto): Promise<Ministry | undefined> {
    return await this.ministryRepository.save(ministry);
  }

  async update(ministry: Ministry): Promise<Ministry | undefined> {
    return await this.save(ministry);
  }

  async delete(id: string): Promise<DeleteResult> {
    return await this.ministryRepository.delete(id);
  }
}
