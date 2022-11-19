import { Module } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ShopifyHttpModule } from './http/shopify-http.module';
import { ShopifyService } from './mock-shopify-api/shopify.service';
import { ShopifyRepository } from './shopify.repository';

@Module({
  imports: [ShopifyHttpModule],
  controllers: [AppController],
  providers: [AppService, ShopifyRepository, PrismaService, ShopifyService],
})
export class AppModule {}
