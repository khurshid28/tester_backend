import { Controller, Get, Post, Body, ParseIntPipe, Param, Delete, Put } from '@nestjs/common';

import { AppService } from './app.service';


@Controller("/test")
export class AppController {
  constructor(private appService: AppService) {}

  @Post()
  create(@Body() data: { question?: string; name?: string; categoryId: number }) {
    return this.appService.create(data);
  }

  @Get("/all")
  findAll() {
    return this.appService.findAll();
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
