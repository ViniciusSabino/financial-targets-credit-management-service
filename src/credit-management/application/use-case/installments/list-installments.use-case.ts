import { Injectable } from '@nestjs/common';

@Injectable()
class ListInstallmentsUseCase {
  byPeriod(): string {
    return 'ListInstallmentsUseCase';
  }
}

export default ListInstallmentsUseCase;
