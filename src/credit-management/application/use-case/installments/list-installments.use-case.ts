import { Injectable } from '@nestjs/common';

@Injectable()
export class ListInstallmentsUseCase {
  byPeriod(): string {
    return 'Hello World!';
  }
}
