import { Injectable } from '@nestjs/common';

@Injectable()
class FreeSpendingService {
  getHello(): string {
    return 'Hello World!';
  }
}

export default FreeSpendingService;
