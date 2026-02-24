import { Injectable } from '@nestjs/common';

@Injectable()
export class RegisterFreeSpendUseCase {
  register(): string {
    return 'Hello World!';
  }
}
