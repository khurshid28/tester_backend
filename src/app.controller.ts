import { Controller, Get, Post, Body, ParseIntPipe, Param, Delete, Put, UseGuards } from '@nestjs/common';

import { AppService } from './app.service';
import { JwtAuthGuard } from './jwt/jwt-guard';
import { CurrentUser } from './jwt/user.decoration';

@UseGuards(JwtAuthGuard)

@Controller("/test")
export class AppController {
  constructor(private appService: AppService) {}

  @Post()
  create(@Body() data: { question?: string; name?: string; subCategoryId: number },@CurrentUser() user: {id? : number,login? : string}) {
    return this.appService.create(data,user);
  }

  @Get("/all")
  findAll(@CurrentUser() user: {id? : number,login? : string}) {
    return this.appService.findAll(user);
  }
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.appService.findOne(id);
  }

  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: { question?: string; name?: string },
  ) {
    return this.appService.update(id, body);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.appService.delete(id);
  }
}
