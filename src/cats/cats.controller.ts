import { Roles } from 'src/shared/roles/roles.decorator';

import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common';

import { CatsService } from './cats.service';
import { CreateCatDto } from './dto/create-cat.dto';
import { Cat } from './interfaces/cat.interface';

@Controller('cats')
export class CatsController {

  constructor(private catsService: CatsService) {}

  @Get()
  async findAll(): Promise<Cat[]> {
    return this.catsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `This action returns a #${id} cat`;
  }

  @Post()
  @Roles('admin')
  async create(@Body() createCatDto: CreateCatDto) {
    return 'This action adds a new cat';
  }

}
