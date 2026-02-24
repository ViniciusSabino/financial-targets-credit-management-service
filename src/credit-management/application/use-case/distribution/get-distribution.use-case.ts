import { Injectable } from '@nestjs/common';

@Injectable()
export class GetDistributionUseCase {
  byCreditCardIdAndPeriod(): string {
    return 'Hello World!';
  }
}
