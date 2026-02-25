import { Controller, Get, HttpCode, HttpStatus, Param, Query } from '@nestjs/common';

import GetDistributionUseCase from '@application/use-case/distribution/get-distribution.use-case';
import ListDistributionsUseCase from '@application/use-case/distribution/list-distributions.use-case';
import DistributionCreditResponse from '@application/dto/distribution/distribution-credit-response';

@Controller('distribution')
class DistributionController {
  constructor(
    private readonly getDistributionUseCase: GetDistributionUseCase,
    private readonly listDistributionsUseCase: ListDistributionsUseCase,
  ) {}

  @HttpCode(HttpStatus.OK)
  @Get('/account/:accountId')
  async getDistribution(
    @Param('accountId') accountId: string,
    @Query('month') month: string,
    @Query('year') year: string,
  ): Promise<DistributionCreditResponse> {
    return this.getDistributionUseCase.byAccountIdAndPeriod(accountId, month, year);
  }

  @HttpCode(HttpStatus.OK)
  @Get()
  async listDistributions(
    @Query('month') month: string,
    @Query('year') year: string,
  ): Promise<Array<DistributionCreditResponse>> {
    return this.listDistributionsUseCase.byPeriod(month, year);
  }
}

export default DistributionController;
