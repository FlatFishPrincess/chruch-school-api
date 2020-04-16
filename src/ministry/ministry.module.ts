import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { DepartmentEntity } from '../department/department.entity';
import { MinistryController } from './ministry.controller';
import { MinistryEntity } from './ministry.entity';
import { MinistryService } from './ministry.service';

@Module({
  imports: [TypeOrmModule.forFeature([MinistryEntity, DepartmentEntity])],
  controllers: [MinistryController],
  providers: [MinistryService]
})
export class MinistryModule {}
