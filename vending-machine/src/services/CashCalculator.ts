export class CashCalculator {
  private readonly denominations = [50000, 20000, 10000, 5000, 2000, 1000, 500];

  calculate(amount: number): number[] {
    const result: number[] = [];

    let remaining = amount;

    for (const denomination of this.denominations) {
      while (remaining >= denomination) {
        result.push(denomination);
        remaining -= denomination;
      }
    }

    if (remaining !== 0) {
      throw new Error("Cannot provide exact change");
    }

    return result;
  }
}
