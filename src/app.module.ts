import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PrismaModule } from './prisma/prisma.module';
import { AppService } from './app.service';

import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { CategoryModule } from './category/category.module';
import { SubcategoryModule } from './subcategory/subcategory.module';

@Module({
  imports: [PrismaModule, ServeStaticModule.forRoot({
    rootPath: join(__dirname,"..", 'web'),
    serveRoot: '/view', 
    renderPath: '/view*',
  
  }), CategoryModule, SubcategoryModule,],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}


