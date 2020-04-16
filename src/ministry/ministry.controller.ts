import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiResponse } from '@nestjs/swagger';

import { MinistryEntity } from './ministry.entity';
import { MinistryService } from './ministry.service';

@Controller('api/ministries')
export class MinistryController {

  constructor(private ministryService: MinistryService) {}
  
  @Get()
  async findAll(@Query() query): Promise<[MinistryEntity[], number]> {
    return await this.ministryService.findAll(query);
  }

  @Get('/:id')
  async getOne(@Param('id') id: string): Promise<MinistryEntity> {
    return await this.ministryService.findById(id);
  }

  @Post()
  @ApiResponse({
    status: 201,
    description: 'The record has been successfully created.',
    type: MinistryEntity
  })
  @ApiBody({ type: MinistryEntity })
  async create(@Body('ministry') ministry: MinistryEntity) {
    console.log('ministry',ministry);
    return this.ministryService.save(ministry);
  }

  @Put()
  async update(@Body('ministry') ministry: MinistryEntity) {
    return this.ministryService.update(ministry);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.ministryService.delete(id);
  }
}
