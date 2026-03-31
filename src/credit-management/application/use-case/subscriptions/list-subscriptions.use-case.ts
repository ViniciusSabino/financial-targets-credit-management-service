import { SubscriptionException } from '@domain/exception/subscription.exception';
import { HttpStatus, Injectable } from '@nestjs/common';

@Injectable()
class ListSubscriptionsUseCase {
  byPeriod(): string {
    throw new SubscriptionException('Not implemented', HttpStatus.NOT_FOUND);
  }
}
