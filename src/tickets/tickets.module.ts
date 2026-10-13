import { Module,MiddlewareConsumer,NestModule } from '@nestjs/common';
import { TicketsController } from './tickets.controller';
import { TicketsService } from './tickets.service';
import { RequestLoggerMiddleware } from 'src/common/request-logger.middleware';

@Module({
  controllers: [TicketsController],
  providers: [TicketsService]
})
export class TicketsModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(RequestLoggerMiddleware)
      .forRoutes(TicketsController);
  }
}
