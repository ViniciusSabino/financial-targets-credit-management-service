import { Controller, Get } from '@nestjs/common';

import { DistributionService } from '@domain/services/distribution/distribution.service';

@Controller()
export class DistributionController {
  constructor(private readonly distributionService: DistributionService) {}

  @Get()
  getHello(): string {
    return this.distributionService.getHello();
  }
}
