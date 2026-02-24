import { Injectable } from '@nestjs/common';

@Injectable()
export class FreeSpendingService {
  getHello(): string {
    return 'Hello World!';
  }
}
