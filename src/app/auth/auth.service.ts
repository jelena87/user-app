import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs/Subject';

import { User } from './user.model';
import { AuthData } from './auth-data.model';

@Injectable()
export class AuthService {
  authChange = new Subject<boolean>();
  private user: User;

  constructor(private router: Router) {}

  registerUser(authData: AuthData) {
    //send request to the server and create a user there
    this.user = {
    email: authData.email,
    roles: authData.roles,
    userId: Math.round(Math.random() * 10000).toString() //will be created on db
    };
    this.authSuccessfully();
  }

  login(authData: AuthData) {
    this.user = {
    email: authData.email,
    roles: authData.roles,
    userId: Math.round(Math.random() * 10000).toString() //will be created on db
    };
    this.authSuccessfully();
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

  private authSuccessfully() {
    this.authChange.next(true);
    this.router.navigate(['/user']);
  }
}
