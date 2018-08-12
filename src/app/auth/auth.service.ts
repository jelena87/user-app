import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {}

  login(email: string, password: string) {
    return this.http.post<any>('/users/authenticate', { email: email, password: password })
      .pipe(map(user => {
        //login successful if there is a jwt token in the response
        if(user && user.token) {
        //store user details and jwt token in local storage
        localStorage.setItem('currentUser', JSON.stringify(user));
      }
      return user;
    }));
  }

  logout() {
    //remove user from local storage
    localStorage.removeItem('currentUser');
  }

  isAuth() {
    return !!localStorage.getItem('currentUser');
  }
}
