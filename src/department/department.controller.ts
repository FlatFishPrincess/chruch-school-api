import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';

import { DepartmentEntity } from './department.entity';
import { DepartmentService } from './department.service';

@Controller('api/departments')
export class DepartmentController {

  constructor(private departmentService: DepartmentService) {}
  
  @Get()
  async findAll(@Query() query): Promise<[DepartmentEntity[], number]> {
    return await this.departmentService.findAll(query);
  }

  @Get('/:id')
  async getOne(@Param('id') id: string): Promise<DepartmentEntity> {
    return await this.departmentService.findById(id);
  }

  @Post()
  async create(@Body('department') department: DepartmentEntity) {
    return this.departmentService.save(department);
  }

  @Put()
  async update(@Body('department') department: DepartmentEntity) {
    return this.departmentService.update(department);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.departmentService.delete(id);
  }
}
