import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {User} from '../model/User';
import {AuthenticationContext} from '../model/context/AuthenticationContext';

@Injectable()
export class AuthService {
  constructor(
    private http: HttpClient
  ) {
    this.loginUrl = `${environment.apiUrl}/auth`;
  }

  loginUrl: string;

  private static storeUser = (user: User): void => {
    localStorage.setItem('user', JSON.stringify(user));
  }

  login(email: string, password: string): Promise<void> {
    const headers = new HttpHeaders().append('Content-Type', 'application/json');

    return this.http.post<User>(this.loginUrl, new AuthenticationContext(email, password), {headers})
      .toPromise()
      .then(response => {
        AuthService.storeUser(response);
      })
      .catch(response => {
        if (response.status === 401) {
          return Promise.reject('Incorrect e-mail or password!');
        }

        return Promise.reject(response);
      });
  }
}
