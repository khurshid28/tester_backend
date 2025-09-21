import { Controller, Get, Post, Body, Patch, Param, Delete, Put, UseGuards } from '@nestjs/common';
import { CategoryService } from './category.service';
import { JwtAuthGuard } from 'src/jwt/jwt-guard';
import { CurrentUser } from 'src/jwt/user.decoration';

@UseGuards(JwtAuthGuard)

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Post()
  create(@Body() body: {
    name? :string 
  },@CurrentUser() user: {id? : number,login? : string}) {
    return this.categoryService.create(body,user);
  }

  @Get("/all")
  findAll(@CurrentUser() user: {id? : number,login? : string}) {
    
    return this.categoryService.findAll(user);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.categoryService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateCategoryDto: {
    name? : string
  }) {
    return this.categoryService.update(+id, updateCategoryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.categoryService.remove(+id);
  }
}
