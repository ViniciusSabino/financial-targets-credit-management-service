class DistributionOutflowDTO {
  constructor(
    private readonly id: number,
    private readonly name: string,
    private readonly value: number,
    private readonly isProcessed: string,
  ) {}
}

export default DistributionOutflowDTO;
