import { HttpException } from '@nestjs/common';

export class SubscriptionException extends HttpException {
  super(message: string) {
    this.message = message;
  }
}
