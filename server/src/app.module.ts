import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { LoggerMiddleware } from './middleware/logger.middleware';
import { HomeModule } from '@pages/home/home.module';
import { NewsModule } from '@pages/news/news.module';

@Module({
    imports: [HomeModule, NewsModule],
})
export class AppModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer
            .apply(LoggerMiddleware)
            .forRoutes('/');
    };
};