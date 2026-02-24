import { Module } from '@nestjs/common';

import { DistributionController } from '@presentation/controller';
import { DistributionService } from '@domain/services';

@Module({
  imports: [],
  controllers: [DistributionController],
  providers: [DistributionService],
})
export class DistributionModule {}
