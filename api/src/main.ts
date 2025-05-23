import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors(['http://localhost:8081']);

  await app.listen(5000);
  console.log(`Listening on http://localhost:5000`);
}
bootstrap();