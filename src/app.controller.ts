import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  @Get()
  getProducts(): any {
    this.appService.fetchAndSaveProductsInDb();
    return 'saved product details in database successfully';
  }
}
