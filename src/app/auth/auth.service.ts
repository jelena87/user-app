import { Injectable } from '@angular/core';
<<<<<<< HEAD
import { Router } from '@angular/router';
import { Subject } from 'rxjs/Subject';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Response } from "@angular/http";
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

import { User } from './user.model';

@Injectable()
export class AuthService {
  authChange = new Subject<boolean>();
  readonly rootUrl = 'http://localhost:4200';


  constructor(private router: Router, private http: HttpClient) {}

  registerUser(user: User, roles: string[]) {
    //send request to the server and create a user there
    const body = {
    Email: user.email,
    Password: user.password,
    Roles: roles,
    userId: Math.round(Math.random() * 10000).toString() //will be created on db
    };
    this.authSuccessfully();
  }

  roleMatch(allowedRoles): boolean {
    var isMatch = false;
    var userRoles: string[] = JSON.parse(localStorage.getItem('userRoles'));
    allowedRoles.forEach(element => {
      if (userRoles.indexOf(element) > -1) {
        isMatch = true;
        return false;
      }
    });
    return isMatch;

  }

  userAuthentication(userName, password) {
    var data = "username=" + userName + "&password=" + password + "&grant_type=password";
    var reqHeader = new HttpHeaders({ 'Content-Type': 'application/x-www-urlencoded','No-Auth':'True' });
    return this.http.post(this.rootUrl + '/token', data, { headers: reqHeader });
  }

  login(user: User, roles: string[]) {
    this.user = {
    email: user.email,
    password: user.password,
    userId: Math.round(Math.random() * 10000).toString() //will be created on db
    };
    this.authSuccessfully();
=======
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
>>>>>>> aaef90bd83c75baac9b90b62a416efecc2bebf51
  }

  logout() {
    //remove user from local storage
    localStorage.removeItem('currentUser');
  }

  isAuth() {
<<<<<<< HEAD
    return this.user != null;
  }

  private authSuccessfully() {
    this.authChange.next(true);
    this.router.navigate(['/user']);
=======
    return !!localStorage.getItem('currentUser');
>>>>>>> aaef90bd83c75baac9b90b62a416efecc2bebf51
  }
}
