import { Injectable } from '@nestjs/common';

@Injectable()
class ListSubscriptionsUseCase {
  byPeriod(): string {
    return 'ListSubscriptionsUseCase';
  }
}

export default ListSubscriptionsUseCase;
