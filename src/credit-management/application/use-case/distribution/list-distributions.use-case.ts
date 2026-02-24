import { Injectable } from '@nestjs/common';

@Injectable()
class ListDistributionsUseCase {
  byPeriod(): string {
    return 'Hello World!';
  }
}

export default ListDistributionsUseCase;
