import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api/v1' ,{
    exclude: ['/view', '/view/(.*)'],
  });
  app.enableCors(); // CORS ni yoqish

  await app.listen(55422);
  console.log('API 👉 http://localhost:55422/api/v1');
  console.log('WEB 👉 http://localhost:55422/view');
}
bootstrap();
