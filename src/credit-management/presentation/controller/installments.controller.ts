import { Controller, Get } from '@nestjs/common';

import { InstallmentsService } from '@domain/services/installments/installments.service';

@Controller()
export class InstallmentsController {
  constructor(private readonly installmentsService: InstallmentsService) {}

  @Get()
  getHello(): string {
    return this.installmentsService.getHello();
  }
}
