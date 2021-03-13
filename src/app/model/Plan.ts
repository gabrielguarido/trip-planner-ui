import {Expense} from './Expense';

export class Plan {
  id: number;
  countryName: string;
  departureDate: string;
  returnDate: string;
  expenseSet: Expense[];

  constructor(id: number, countryName: string, departureDate: string, returnDate: string, expenseSet: Expense[]) {
    this.id = id;
    this.countryName = countryName;
    this.departureDate = departureDate;
    this.returnDate = returnDate;
    this.expenseSet = expenseSet;
  }
}
