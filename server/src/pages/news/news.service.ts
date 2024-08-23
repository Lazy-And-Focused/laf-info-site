import { Injectable } from '@nestjs/common';

@Injectable()
export class NewsService {
    getHello(): string {
        return 'Hello from News!';
    };
};