import { Inject, Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { catchError, map } from 'rxjs';
import { ShopifyRepository } from './shopify.repository';
import { SHOPIFY_HTTP_PROVIDER } from 'src/http/shopify-http.module';
import { errorToPromise } from 'src/http/error.handler';

@Injectable()
export class AppService {
  constructor(
    @Inject(SHOPIFY_HTTP_PROVIDER)
    private readonly http: HttpService,
    private readonly repo: ShopifyRepository,
  ) {}
  fetchAndSaveProductsInDb() {
    const productDetails = this.http.post<any>('/products.json').pipe(
      map((res) => res.data),
      catchError(errorToPromise),
    );

    this.repo.create(productDetails);
  }
}
