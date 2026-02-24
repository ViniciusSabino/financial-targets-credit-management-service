import { Controller, Get, Post } from '@nestjs/common';

import GetInstallmentUseCase from '@application/use-case/installments/get-installment.use-case';
import ListInstallmentsUseCase from '@application/use-case/installments/list-installments.use-case';
import RegisterInstallmentPurchaseUseCase from '@application/use-case/installments/register-installment-purchase.use-case';

@Controller('installments')
class InstallmentsController {
  constructor(
    private readonly getInstallmentUseCase: GetInstallmentUseCase,
    private readonly listInstallmentsUseCase: ListInstallmentsUseCase,
    private readonly registerInstallmentPurchaseUseCase: RegisterInstallmentPurchaseUseCase,
  ) {}

  @Get()
  getInstallment(): string {
    return this.getInstallmentUseCase.byCreditCardIdAndPeriod();
  }

  @Get()
  listInstallments(): string {
    return this.listInstallmentsUseCase.byPeriod();
  }

  @Post()
  registerInstallmentPurchase(): string {
    return this.registerInstallmentPurchaseUseCase.register();
  }
}

export default InstallmentsController;
