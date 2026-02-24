import { Module } from '@nestjs/common';

import { SubscriptionsController } from '@presentation/controller';
import { SubscriptionsService } from '@domain/services';

@Module({
  imports: [],
  controllers: [SubscriptionsController],
  providers: [SubscriptionsService],
})
export class SubscriptionsModule {}
