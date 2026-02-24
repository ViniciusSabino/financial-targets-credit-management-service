import { Injectable } from '@nestjs/common';

@Injectable()
export class RegisterSubscriptionUseCase {
  register(): string {
    return 'Hello World!';
  }
}
