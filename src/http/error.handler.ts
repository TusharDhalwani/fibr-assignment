import { httpErrorHandler } from '@app/common-nest/src';
import { HttpException } from '@nestjs/common';
import { AxiosError } from 'axios';
import {
  ShopifyAuthException,
  ShopifyConnectionException,
  ShopifyEndpointNotFoundException,
} from './shopify.exception';

export const errorToPromise = async (
  error: AxiosError | Record<string, any>,
): Promise<never> => {
  // Handle non axios errors and no response axios error.
  await httpErrorHandler({
    error,
    ex: new ShopifyConnectionException(),
    ex404: new ShopifyEndpointNotFoundException(),
    ex401: new ShopifyAuthException(),
  });
  // Handle axios errors with response

  return Promise.reject(
    new HttpException(error.response.data, error.response.status),
  );
};
