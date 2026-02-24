import { Module } from '@nestjs/common';

import { InstallmentsController } from '@presentation/controller';
import { InstallmentsService } from '@domain/services';

@Module({
  imports: [],
  controllers: [InstallmentsController],
  providers: [InstallmentsService],
})
export class InstallmentsModule {}
