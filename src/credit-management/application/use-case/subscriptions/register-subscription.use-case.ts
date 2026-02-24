import { Injectable } from '@nestjs/common';

@Injectable()
class RegisterSubscriptionUseCase {
  register(): string {
    return 'Hello World!';
  }
}

export default RegisterSubscriptionUseCase;
