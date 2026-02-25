import { Body, Controller, Get, HttpCode, HttpStatus, Param, Post } from '@nestjs/common';

import GetInstallmentUseCase from '@application/use-case/installments/get-installment.use-case';
import ListInstallmentsUseCase from '@application/use-case/installments/list-installments.use-case';
import RegisterInstallmentPurchaseUseCase from '@application/use-case/installments/register-installment-purchase.use-case';
import InstallmentPurchaseRegisterDTO from '@application/dto/installment-purchase-register.dto';

@Controller('installments')
class InstallmentsController {
  constructor(
    private readonly getInstallmentUseCase: GetInstallmentUseCase,
    private readonly listInstallmentsUseCase: ListInstallmentsUseCase,
    private readonly registerInstallmentPurchaseUseCase: RegisterInstallmentPurchaseUseCase,
  ) {}

  @HttpCode(HttpStatus.OK)
  @Get('/account/:accountId')
  async getInstallment(@Param('accountId') accountId: string): Promise<string> {
    return this.getInstallmentUseCase.byCreditCardIdAndPeriod();
  }

  @HttpCode(HttpStatus.OK)
  @Get()
  async listInstallments(): Promise<string> {
    return this.listInstallmentsUseCase.byPeriod();
  }

  @HttpCode(HttpStatus.CREATED)
  @Post('/account/:accountId')
  async registerInstallmentPurchase(
    @Param('accountId') accountId: string,
    @Body() installmentPurchaseRegisterDTO: InstallmentPurchaseRegisterDTO,
  ): Promise<string> {
    return this.registerInstallmentPurchaseUseCase.register();
  }
}

export default InstallmentsController;
