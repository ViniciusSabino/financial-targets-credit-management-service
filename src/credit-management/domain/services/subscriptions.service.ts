import { Injectable } from '@nestjs/common';

@Injectable()
class SubscriptionsService {
  getHello(): string {
    return 'Hello World!';
  }
}

export default SubscriptionsService;
