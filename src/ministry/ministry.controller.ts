import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';

import { CreateMinistryDto } from './dto/create-ministry.dto';
import { Ministry, MinistryC } from './ministry.interface';
import { MinistryService } from './ministry.service';

@Controller('api/ministries')
export class MinistryController {

  constructor(private ministryService: MinistryService) {}
  
  @Get()
  async findAll(@Query() query): Promise<[Ministry[], number]> {
    return await this.ministryService.findAll(query);
  }

  @Get('/:id')
  async getOne(@Param('id') id: string): Promise<Ministry> {
    return await this.ministryService.findById(id);
  }

  @Post()
  async create(@Body('ministry') ministry: CreateMinistryDto) {
    console.log('ministry',ministry);
    return this.ministryService.save(ministry);
  }

  @Put()
  async update(@Body('ministry') ministry: Ministry) {
    return this.ministryService.update(ministry);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.ministryService.delete(id);
  }
}
