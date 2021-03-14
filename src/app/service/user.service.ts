import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {UserCreationContext} from '../model/context/UserCreationContext';

@Injectable()
export class UserService {
  constructor(
    private http: HttpClient
  ) {
    this.apiUrl = `${environment.apiUrl}/user`;
  }

  apiUrl: string;

  register(user: UserCreationContext): Promise<UserCreationContext> {
    return this.http.post<UserCreationContext>(this.apiUrl, user)
      .toPromise();
  }
}
