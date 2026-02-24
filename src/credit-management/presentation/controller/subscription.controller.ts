import { Controller, Get } from '@nestjs/common';

import { SubscriptionsService } from '@domain/services/subscriptions/subscriptions.service';

@Controller()
export class SubscriptionsController {
  constructor(private readonly subscriptionsService: SubscriptionsService) {}

  @Get()
  getHello(): string {
    return this.subscriptionsService.getHello();
  }
}
