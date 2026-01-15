import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  const port = process.env.PORT || 3000;
  await app.listen(port);
  const isProd = process.env.NODE_ENV === 'production';
  console.log(
    `Application is running on: ${isProd ? await app.getUrl() : 'http://localhost:' + port}`,
  );
}
void bootstrap();
