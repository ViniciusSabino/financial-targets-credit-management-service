import { Injectable } from '@nestjs/common';

@Injectable()
export class GetInstallmentUseCase {
  byCreditCardIdAndPeriod(): string {
    return 'Hello World!';
  }
}
