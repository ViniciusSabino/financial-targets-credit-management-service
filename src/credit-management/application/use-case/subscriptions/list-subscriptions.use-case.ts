import { Injectable } from '@nestjs/common';

@Injectable()
class ListSubscriptionsUseCase {
  byPeriod(): string {
    return 'Hello World!';
  }
}

export default ListSubscriptionsUseCase;
