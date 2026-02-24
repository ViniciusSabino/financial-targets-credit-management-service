import { Injectable } from '@nestjs/common';

@Injectable()
export class ListDistributionsUseCase {
  byPeriod(): string {
    return 'Hello World!';
  }
}
