import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { SubcategoryService } from './subcategory.service';

@Controller('subcategory')
export class SubcategoryController {
  constructor(private readonly subcategoryService: SubcategoryService) {}

  @Post()
  create(@Body() body: {
    name?: string;
    categoryId?: number
  }) {
    return this.subcategoryService.create(body);
  }

  @Get("/all")
  findAll() {
    return this.subcategoryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.subcategoryService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() body: {
    name?: string
  }) {
    return this.subcategoryService.update(+id, body);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.subcategoryService.remove(+id);
  }
}
