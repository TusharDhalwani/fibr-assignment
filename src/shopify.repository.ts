import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ShopifyRepository {
  constructor(private readonly db: PrismaService) {}
  create({ data }: { readonly data: any }): Promise<any> {
    return this.db.shopAndProduct.create({
      data,
    });
  }
}
