import { Controller, Get } from '@nestjs/common';

import { FreeSpendingService } from '@domain/services/free-spending/free-spending.service';

@Controller()
export class FreeSpendingController {
  constructor(private readonly freeSpendingService: FreeSpendingService) {}

  @Get()
  getHello(): string {
    return this.freeSpendingService.getHello();
  }
}
