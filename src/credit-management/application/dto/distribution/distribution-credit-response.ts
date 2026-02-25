import DistributionOutflowDTO from './distribution-outflow.dto';

class DistributionCreditResponse {
  constructor(
    private readonly accountId: number,
    private readonly accountName: string,
    private readonly currentInvoice: number,
    private readonly estimatedInvoice: number,
    private readonly outflows: Array<DistributionOutflowDTO>,
  ) {}
}

export default DistributionCreditResponse;
