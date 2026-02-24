import { Controller, Get } from '@nestjs/common';

import { GetDistributionUseCase } from '@application/use-case/distribution/get-distribution.use-case';
import { ListDistributionsUseCase } from '@application/use-case/distribution/list-distributions.use-case';

@Controller('distribution')
export class DistributionController {
  constructor(
    private readonly getDistributionUseCase: GetDistributionUseCase,
    private readonly listDistributionsUseCase: ListDistributionsUseCase,
  ) {}

  @Get()
  getDistribution(): string {
    return this.getDistributionUseCase.byCreditCardIdAndPeriod();
  }

  @Get()
  listDistributions(): string {
    return this.listDistributionsUseCase.byPeriod();
  }
}
