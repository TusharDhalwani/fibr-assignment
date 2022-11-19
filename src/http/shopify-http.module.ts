import { BaseHttpModule, httpModule } from '@app/common-nest/src';
import { HttpService } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { ShopifySettings } from 'src/config/types';

export const SHOPIFY_HTTP_PROVIDER = 'SHOPIFY_HTTP_PROVIDER';

@Module({
  imports: [
    httpModule<ShopifySettings>({ endpointKey: 'SHOPIFY_SERVICE_ENDPOINT' }),
  ],
  providers: [
    {
      provide: SHOPIFY_HTTP_PROVIDER,
      useExisting: HttpService,
    },
  ],
  exports: [SHOPIFY_HTTP_PROVIDER],
})
export class ShopifyHttpModule extends BaseHttpModule {}
