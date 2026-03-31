import { Injectable } from '@nestjs/common';

@Injectable()
class InstallmentsService {
  getHello(): string {
    return 'Hello World!';
  }
}

export default InstallmentsService;
