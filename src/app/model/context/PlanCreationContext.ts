export class PlanCreationContext {
  userId: number;
  countryName: string;
  departureDate: string;
  returnDate: string;

  constructor(userId: number, countryName: string, departureDate: string, returnDate: string) {
    this.userId = userId;
    this.countryName = countryName;
    this.departureDate = departureDate;
    this.returnDate = returnDate;
  }
}
