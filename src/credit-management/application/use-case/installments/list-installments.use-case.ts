import { Injectable } from '@nestjs/common';

@Injectable()
class ListInstallmentsUseCase {
  byPeriod(): string {
    return 'Hello World!';
  }
}

export default ListInstallmentsUseCase;
