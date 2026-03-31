import { Body, Controller, Get, HttpCode, HttpStatus, Param, Post, Query } from '@nestjs/common';

import ListSubscriptionsUseCase from '@application/use-case/subscriptions/list-subscriptions.use-case';
import RegisterSubscriptionUseCase from '@application/use-case/subscriptions/register-subscription.use-case';
import SubscriptionRegisterDTO from '@application/dto/subscriptions/subscription-register.dto';

@Controller('subscriptions')
class SubscriptionsController {
  constructor(
    private readonly listSubscriptionsUseCase: ListSubscriptionsUseCase,
    private readonly registerSubscriptionUseCase: RegisterSubscriptionUseCase,
  ) {}

  @HttpCode(HttpStatus.OK)
  @Get()
  async listSubscriptions(@Query('month') month: string, @Query('year') year: string): Promise<string> {
    return this.listSubscriptionsUseCase.byPeriod();
  }

  @HttpCode(HttpStatus.CREATED)
  @Post('/account/:accountId')
  async registerSubscription(
    @Param('accountId') accountId: string,
    @Body() subscriptionRegisterDTO: SubscriptionRegisterDTO,
  ): Promise<string> {
    return this.registerSubscriptionUseCase.register();
  }
}

export default SubscriptionsController;
