
import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api'); // Set a global prefix for all routes

  // Redirect the root URL to the tickets API instead of returning 404
  app.getHttpAdapter().get('/', (_req, res) => res.redirect('/api/tickets'));


  // Validate request bodies against DTOs
  app.useGlobalPipes(new ValidationPipe({ 
    whitelist: true,                       // do not allow properties that are not in the DTO
    forbidNonWhitelisted: true            // throw an error if non-whitelisted properties are present
  }));

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
