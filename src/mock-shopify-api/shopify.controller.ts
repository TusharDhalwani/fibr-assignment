import { Get } from '@nestjs/common';
import { ShopifyService } from './shopify.service';

export class ShopifyController {
  constructor(private readonly shopifyService: ShopifyService) {}

  @Get()
  getProducts(): any {
    return this.shopifyService.getProducts();
  }
}
