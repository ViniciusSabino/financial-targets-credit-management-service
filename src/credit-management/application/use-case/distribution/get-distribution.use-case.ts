import { Injectable } from '@nestjs/common';

@Injectable()
class GetDistributionUseCase {
  byCreditCardIdAndPeriod(): string {
    return 'Hello World!';
  }
}

export default GetDistributionUseCase;
