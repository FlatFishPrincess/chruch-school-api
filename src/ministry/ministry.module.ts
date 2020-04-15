import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { MinistryController } from './ministry.controller';
import { MinistryEntity } from './ministry.entity';
import { MinistryService } from './ministry.service';

@Module({
  imports: [TypeOrmModule.forFeature([MinistryEntity])],
  controllers: [MinistryController],
  providers: [MinistryService]
})
export class MinistryModule {}
