class FreeSpendingResponse {
  constructor(
    private readonly id: number,
    private readonly accountId: number,
    private readonly value: number,
    private readonly date: string,
  ) {}
}

export default FreeSpendingResponse;
