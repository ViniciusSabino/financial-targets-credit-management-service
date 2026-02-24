import { Module } from '@nestjs/common';

import SubscriptionsController from '@presentation/controller/subscriptions.controller';
import ListSubscriptionsUseCase from '@application/use-case/subscriptions/list-subscriptions.use-case';
import RegisterSubscriptionUseCase from '@application/use-case/subscriptions/register-subscription.use-case';
import SubscriptionsService from '@domain/services/subscriptions/subscriptions.service';

@Module({
  imports: [],
  controllers: [SubscriptionsController],
  providers: [ListSubscriptionsUseCase, RegisterSubscriptionUseCase, SubscriptionsService],
})
export default class SubscriptionsModule {}
