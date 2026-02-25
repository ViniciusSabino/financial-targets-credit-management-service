import { Injectable } from '@nestjs/common';

@Injectable()
class GetInstallmentUseCase {
  byCreditCardIdAndPeriod(): string {
    return 'GetInstallmentUseCase';
  }
}

export default GetInstallmentUseCase;
