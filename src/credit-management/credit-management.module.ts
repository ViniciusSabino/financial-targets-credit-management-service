import { Module } from '@nestjs/common';

import InstallmentsModule from './installments.module';
import DistributionModule from './distribution.module';
import FreeSpendingModule from './free-spending.module';
import SubscriptionsModule from './subscriptions.module';

@Module({
  imports: [InstallmentsModule, DistributionModule, FreeSpendingModule, SubscriptionsModule],
  controllers: [],
  providers: [],
})
export class CreditManagementModule {}
