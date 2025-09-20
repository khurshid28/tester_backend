import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PrismaModule } from './prisma/prisma.module';
import { AppService } from './app.service';
import { CategoryModule } from './category/category.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [PrismaModule, CategoryModule, ServeStaticModule.forRoot({
    rootPath: join(__dirname,"..", 'web'),
    serveRoot: '/view', 
    renderPath: '/view*',
  
  }),],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}


