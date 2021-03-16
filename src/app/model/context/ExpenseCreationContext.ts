export class ExpenseCreationContext {
  planId: number;
  description: string;
  amount: number;
  currency: string;

  constructor(planId: number, description: string, amount: number, currency: string) {
    this.planId = planId;
    this.description = description;
    this.amount = amount;
    this.currency = currency;
  }
}
