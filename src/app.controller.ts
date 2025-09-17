import { Controller, Get, Post, Body } from '@nestjs/common';

import { AppService } from './app.service';


@Controller("/test")
export class AppController {
  constructor(private appService: AppService) {}

  @Post()
  create(@Body() data: { question?: string; name?: string }) {
    return this.appService.create(data);
  }

  @Get("/all")
  findAll() {
    return this.appService.findAll();
  }
}
