import { Module } from '@nestjs/common';

import { FreeSpendingController } from '@presentation/controller';
import { FreeSpendingService } from '@domain/services';

@Module({
  imports: [],
  controllers: [FreeSpendingController],
  providers: [FreeSpendingService],
})
export class FreeSpendingModule {}
