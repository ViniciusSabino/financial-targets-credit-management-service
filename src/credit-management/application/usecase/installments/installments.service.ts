import { Injectable } from '@nestjs/common';

@Injectable()
export class InstallmentsService {
  getHello(): string {
    return 'Hello World!';
  }
}
