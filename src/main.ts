
import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api'); // Set a global prefix for all routes


  // Validate request bodies against DTOs
  app.useGlobalPipes(new ValidationPipe({ 
    whitelist: true,                       // do not allow properties that are not in the DTO
    forbidNonWhitelisted: true            // throw an error if non-whitelisted properties are present
  }));

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
