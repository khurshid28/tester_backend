import { Controller, Get, Post, Body, Patch, Param, Delete, Put, UseGuards } from '@nestjs/common';
import { SubcategoryService } from './subcategory.service';
import { JwtAuthGuard } from 'src/jwt/jwt-guard';
import { CurrentUser } from 'src/jwt/user.decoration';



@UseGuards(JwtAuthGuard)

@Controller('subcategory')
export class SubcategoryController {
  constructor(private readonly subcategoryService: SubcategoryService) {}

  @Post()
  create(@Body() body: {
    name?: string;
    categoryId?: number
  },@CurrentUser() user: {id? : number,login? : string}) {
    return this.subcategoryService.create(body,user);
  }

  @Get("/all")
  findAll(@CurrentUser() user: {id? : number,login? : string}) {
    return this.subcategoryService.findAll(user);
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
