import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Expense} from '../model/Expense';
import {ExpenseCreationContext} from '../model/context/ExpenseCreationContext';

@Injectable()
export class ExpenseService {
  constructor(
    private http: HttpClient
  ) {
    this.apiUrl = `${environment.apiUrl}/expense`;
  }

  apiUrl: string;

  register(expense: ExpenseCreationContext): Promise<Expense> {
    return this.http.post<Expense>(this.apiUrl, expense)
      .toPromise();
  }

  findAllByPlanId(planId: number): Promise<Expense[]> {
    return this.http.get<Expense[]>(`${this.apiUrl}/plan/${planId}`)
      .toPromise();
  }

  delete(id: number): Promise<any> {
    return this.http.delete(`${this.apiUrl}/${id}`)
      .toPromise();
  }
}
