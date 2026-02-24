import { Controller, Get, Post } from '@nestjs/common';

import { ListSubscriptionsUseCase } from '@application/use-case/subscriptions/list-subscriptions.use-case';
import { RegisterSubscriptionUseCase } from '@application/use-case/subscriptions/register-subscription.use-case';

@Controller('subscription')
export class SubscriptionsController {
  constructor(
    private readonly listSubscriptionsUseCase: ListSubscriptionsUseCase,
    private readonly registerSubscriptionUseCase: RegisterSubscriptionUseCase,
  ) {}

  @Get()
  listSubscriptions(): string {
    return this.listSubscriptionsUseCase.byPeriod();
  }

  @Post()
  registerSubscription(): string {
    return this.registerSubscriptionUseCase.register();
  }
}
