export class Expense {
  id: number;
  description: string;
  amount: number;
  currency: string;

  constructor(id: number, description: string, amount: number, currency: string) {
    this.id = id;
    this.description = description;
    this.amount = amount;
    this.currency = currency;
  }
}
