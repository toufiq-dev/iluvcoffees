import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      // transform: true, // impacts performance
      transformOptions: {
        enableImplicitConversion: true,
      },
    }),
  );
  await app.listen(4080);
}
bootstrap();
