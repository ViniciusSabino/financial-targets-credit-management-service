import { Body, Controller, HttpCode, HttpStatus, Param, Post } from '@nestjs/common';

import RegisterFreeSpendUseCase from '@application/use-case/free-spending/register-free-spend.use-case';
import FreeSpendingRegisterDTO from '@application/dto/free-spending/free-spending-register.dto';
import FreeSpendingResponse from '@application/dto/free-spending/free-spending-response';

@Controller('free-spending')
class FreeSpendingController {
  constructor(private readonly registerFreeSpendUseCase: RegisterFreeSpendUseCase) {}

  @HttpCode(HttpStatus.CREATED)
  @Post('/account/:accountId')
  async registerFreeSpending(
    @Param('accountId') accountId: string,
    @Body() freeSpendingRegisterDTO: FreeSpendingRegisterDTO,
  ): Promise<FreeSpendingResponse> {
    return this.registerFreeSpendUseCase.register(freeSpendingRegisterDTO);
  }
}

export default FreeSpendingController;
