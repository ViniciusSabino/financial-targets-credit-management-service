import FreeSpendingCreateDTO from '@application/dto/free-spending/free-spending-register.dto';
import FreeSpendingResponse from '@application/dto/free-spending/free-spending-response';
import { Injectable } from '@nestjs/common';

@Injectable()
class RegisterFreeSpendUseCase {
  async register(freeSpendingCreate: FreeSpendingCreateDTO): Promise<FreeSpendingResponse> {
    const response: FreeSpendingResponse = new FreeSpendingResponse(1, 1, 200.0, '');

    return Promise.resolve(response);
  }
}

export default RegisterFreeSpendUseCase;
