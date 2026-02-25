import DistributionCreditResponse from '@application/dto/distribution/distribution-credit-response';
import DistributionOutflowDTO from '@application/dto/distribution/distribution-outflow.dto';
import { Injectable } from '@nestjs/common';

@Injectable()
class GetDistributionUseCase {
  async byAccountIdAndPeriod(
    accountId: string,
    month: string,
    year: string,
  ): Promise<DistributionCreditResponse> {
    const outflows: DistributionOutflowDTO[] = new Array();

    const distributionOutflowDTO: DistributionCreditResponse = new DistributionCreditResponse(
      1,
      'Teste',
      200.0,
      300.0,
      outflows,
    );
    return Promise.resolve(distributionOutflowDTO);
  }
}

export default GetDistributionUseCase;
