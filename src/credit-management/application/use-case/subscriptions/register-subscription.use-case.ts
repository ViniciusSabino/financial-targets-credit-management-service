import { Injectable } from '@nestjs/common';

@Injectable()
class RegisterSubscriptionUseCase {
  register(): string {
    return 'RegisterSubscriptionUseCase';
  }
}

export default RegisterSubscriptionUseCase;
