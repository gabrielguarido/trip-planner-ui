import {Plan} from './Plan';

export class User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  planSet: Plan[];

  constructor(id: number, firstName: string, lastName: string, email: string, password: string, planSet: Plan[]) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
    this.planSet = planSet;
  }
}
