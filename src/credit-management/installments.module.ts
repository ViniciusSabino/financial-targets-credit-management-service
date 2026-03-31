import { Module } from '@nestjs/common';

import InstallmentsController from '@presentation/controller/installments.controller';
import GetInstallmentUseCase from '@application/use-case/installments/get-installment.use-case';
import ListInstallmentsUseCase from '@application/use-case/installments/list-installments.use-case';
import RegisterInstallmentPurchaseUseCase from '@application/use-case/installments/register-installment-purchase.use-case';
import InstallmentsService from '@domain/services/installments.service';

@Module({
  imports: [],
  controllers: [InstallmentsController],
  providers: [GetInstallmentUseCase, ListInstallmentsUseCase, RegisterInstallmentPurchaseUseCase, InstallmentsService],
})
export default class InstallmentsModule {}
