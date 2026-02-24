import { Injectable } from '@nestjs/common';

@Injectable()
class RegisterFreeSpendUseCase {
  register(): string {
    return 'Hello World!';
  }
}

export default RegisterFreeSpendUseCase;
