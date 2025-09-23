import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PrismaModule } from './prisma/prisma.module';
import { AppService } from './app.service';

import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { CategoryModule } from './category/category.module';
import { SubcategoryModule } from './subcategory/subcategory.module';
import { AuthModule } from './auth/auth.module';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './jwt/jwt.strategy';
import { TestGroupModule } from './test-group/test-group.module';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt', }),
    
    PrismaModule, ServeStaticModule.forRoot({
    rootPath: join(__dirname,"..", 'web'),
    serveRoot: '/view', 
    renderPath: '/view*',
  
  }), CategoryModule, SubcategoryModule, AuthModule, TestGroupModule,],
  controllers: [AppController],
  providers: [AppService,JwtStrategy],
})
export class AppModule {}


