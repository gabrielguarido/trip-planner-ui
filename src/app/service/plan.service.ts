import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Plan} from '../model/Plan';

@Injectable()
export class PlanService {
  constructor(
    private http: HttpClient
  ) {
    this.apiUrl = `${environment.apiUrl}/plan`;
  }

  apiUrl: string;

  register(plan: Plan): Promise<Plan> {
    return this.http.post<Plan>(this.apiUrl, plan)
      .toPromise();
  }

  delete(id: number): Promise<any> {
    return this.http.delete(`${this.apiUrl}/${id}`)
      .toPromise();
  }
}
