import { Controller, Post } from '@nestjs/common';

import { RegisterFreeSpendUseCase } from '@application/use-case/free-spending/register-free-spend.use-case';

@Controller('free-spending')
export class FreeSpendingController {
  constructor(private readonly registerFreeSpendUseCase: RegisterFreeSpendUseCase) {}

  @Post()
  registerFreeSpending(): string {
    return this.registerFreeSpendUseCase.register();
  }
}
