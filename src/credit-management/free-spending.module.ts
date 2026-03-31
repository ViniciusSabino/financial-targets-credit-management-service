import { Module } from '@nestjs/common';

import FreeSpendingController from '@presentation/controller/free-spending.controller';
import RegisterFreeSpendUseCase from '@application/use-case/free-spending/register-free-spend.use-case';
import FreeSpendingService from '@domain/services/free-spending.service';

@Module({
  imports: [],
  controllers: [FreeSpendingController],
  providers: [RegisterFreeSpendUseCase, FreeSpendingService],
})
export default class FreeSpendingModule {}
