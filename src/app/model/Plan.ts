import {Expense} from './Expense';

export class Plan {
  id: number;
  countryName: string;
  departureDate: string;
  returnDate: string;
  duration: number;
  expenseSet: Expense[];

  constructor(id: number, countryName: string, departureDate: string, returnDate: string, duration: number, expenseSet: Expense[]) {
    this.id = id;
    this.countryName = countryName;
    this.departureDate = departureDate;
    this.returnDate = returnDate;
    this.duration = duration;
    this.expenseSet = expenseSet;
  }
}
