import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs/Subject';

import { User } from './user.model';
import { AuthData } from './auth-data.model';
import { environment } from '../../environments/environment';
import { HttpService } from '../shared/http.service';

@Injectable()
export class AuthService {
  authChange = new Subject<boolean>();
  private user: User;

  constructor(private router: Router, private httpService: HttpService) {}

  registerUser (authData: AuthData) {
    //send request to the server and create a user there
    console.log(environment.service);
    this.httpService.postToUrl<AuthData>(environment.service + '/users', authData).subscribe(
        (data: any) => {
            this.user = data;
            this.authSuccessfully();
        },
        (err: any) => {
            console.log('An error occurred while creating user:' + err);
        }
    );
  }

  login(authData: AuthData) {
    this.user = {
    email: authData.email,
    password: authData.password,
    userId: Math.round(Math.random() * 10000).toString() //will be created on db
    };
    this.authSuccessfully();
  }

  resetPass(authData: AuthData) {
    return this.httpService.postToUrl<AuthData>(environment.service + '/user/sendPasswordResetLink', authData);
  }

  logout() {
    this.user = null;
    this.authChange.next(false);
    this.router.navigate(['/login']);
  }

  getUser() {
    return { ...this.user };
  }

  isAuth() {
    return this.user != null;
  }

  isAdmin() {
    return this.user != null;
  }

  private authSuccessfully() {
    this.authChange.next(true);
    this.router.navigate(['/']);
  }
}
