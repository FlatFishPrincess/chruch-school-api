import { getRepository, Repository } from 'typeorm';

import { Injectable, Query } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { MinistryEntity } from './ministry.entity';
import { Ministry, MinistryC } from './ministry.interface';

@Injectable()
export class MinistryService {
  constructor(
    @InjectRepository(MinistryEntity)
    private readonly ministryRepository: Repository<MinistryEntity>,
  ){}

  async findAll(query): Promise<[Ministry[], number]> {
    const result = await getRepository(MinistryEntity).findAndCount();
    return result;
  }
}
