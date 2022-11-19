import {
  CustomInternalServerException,
  CustomServiceUnavailableException,
} from '@app/common-nest/src';
import { NotFoundException } from '@nestjs/common';
import { ErrorCode } from 'src/exceptions/error-code.enum';

/**
 * Reasons
 * - Payment gateway aggregator down or not reachable.
 */
export class ShopifyConnectionException extends CustomServiceUnavailableException<ErrorCode> {
  constructor() {
    super({
      error: 'Error connecting to shopify service',
      errorCode: ErrorCode.ShopifyConnection,
    });
  }
}

/**
 * Reasons
 * - Payment gateway aggregator configured with incorrect credentials.
 */
export class ShopifyAuthException extends CustomInternalServerException<ErrorCode> {
  constructor() {
    super({
      error: 'Invalid credentials configured for payment service',
      errorCode: ErrorCode.ShopifyIncorrectAuth,
    });
  }
}

/**
 * Reasons
 * - Payment service not found.
 */
export class ShopifyEndpointNotFoundException extends NotFoundException {
  constructor() {
    super({
      error: 'Service endpoint not found',
      errorCode: ErrorCode.ShopifyEndpointNotFound,
    });
  }
}
