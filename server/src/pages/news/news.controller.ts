import { Controller, Get } from '@nestjs/common';
import { NewsService } from './news.service';

@Controller()
export class NewsController {
    constructor(private readonly appService: NewsService) {}

    @Get('news')
    getHello(): string {
        return this.appService.getHello();
    };
};