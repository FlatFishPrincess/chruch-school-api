import { Controller, Get, Query } from '@nestjs/common';

import { Ministry, MinistryC } from './ministry.interface';
import { MinistryService } from './ministry.service';

@Controller('api/ministries')
export class MinistryController {

  constructor(private ministryService: MinistryService) {}
  
  @Get()
  async findAll(@Query() query): Promise<[Ministry[], number]> {
    return await this.ministryService.findAll(query);
  }
}
