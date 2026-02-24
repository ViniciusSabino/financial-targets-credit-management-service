import { Injectable } from '@nestjs/common';

@Injectable()
class GetInstallmentUseCase {
  byCreditCardIdAndPeriod(): string {
    return 'Hello World!';
  }
}

export default GetInstallmentUseCase;
