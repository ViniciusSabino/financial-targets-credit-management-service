import { Injectable } from '@nestjs/common';

@Injectable()
class DistributionService {
  getHello(): string {
    return 'Hello World!';
  }
}

export default DistributionService;
