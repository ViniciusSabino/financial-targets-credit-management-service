import { Injectable } from '@nestjs/common';

@Injectable()
export class ListSubscriptionsUseCase {
  byPeriod(): string {
    return 'Hello World!';
  }
}
