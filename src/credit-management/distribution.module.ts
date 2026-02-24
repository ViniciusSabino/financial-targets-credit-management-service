import { Module } from '@nestjs/common';

import DistributionController from '@presentation/controller/distribution.controller';
import GetDistributionUseCase from '@application/use-case/distribution/get-distribution.use-case';
import ListDistributionsUseCase from '@application/use-case/distribution/list-distributions.use-case';
import DistributionService from '@domain/services/distribution/distribution.service';

@Module({
  imports: [],
  controllers: [DistributionController],
  providers: [GetDistributionUseCase, ListDistributionsUseCase, DistributionService],
})
export default class DistributionModule {}
