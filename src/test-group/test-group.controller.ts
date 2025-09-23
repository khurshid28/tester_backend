import { Controller, Get, Post, Body, Param, Patch, Delete, ParseIntPipe } from '@nestjs/common';
import { TestGroupService } from './test-group.service';
import { Prisma } from 'generated/prisma';

@Controller('test-group')
export class TestGroupController {
  constructor(private readonly service: TestGroupService) {}

  @Post()
  create(@Body() data: Prisma.TestGroupCreateInput) {
    return this.service.create(data);
  }

  @Get("/all")
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.service.findOne(id);
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() data: Prisma.TestGroupUpdateInput) {
    return this.service.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.service.remove(id);
  }
}
