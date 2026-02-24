import { Injectable } from '@nestjs/common';

@Injectable()
export class DistributionService {
  getHello(): string {
    return 'Hello World!';
  }
}
