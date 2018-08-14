import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs/Subject';
import { ToastrService } from 'ngx-toastr';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { User } from './user.model';
import { AuthData } from './auth-data.model';
import { environment } from '../../environments/environment';
import { HttpService } from '../shared/http.service';

@Injectable()
export class AuthService {
  authChange = new Subject<boolean>();
  private user: User;
  TOKEN_KEY = 'token';

  constructor(private router: Router,
              private httpService: HttpService,
              private toastr: ToastrService) {}

  get token() {
      return localStorage.getItem(this.TOKEN_KEY);
  }

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
            this.toastr.error('An error occurred while creating a user!', 'Email is already taken!', {
  timeOut: 3000
});
        }
    );
  }

  login(email: string, password: string) {
        const headers = {
            headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Cache-Control': 'no-cache' })
        };

        const data = {
            email: email,
            password: password
        };

        this.httpService.postToUrl(environment.service + '/login', data, headers).subscribe(
            (res: any) => {
                localStorage.setItem(this.TOKEN_KEY, res.token);

                this.router.navigateByUrl('/user');
            }
        );
    }

    logout() {
         localStorage.removeItem(this.TOKEN_KEY);
         this.router.navigateByUrl('/');
     }

    getAccount() {
        return this.http.get(this.API_URL + '/account');
    }

  resetPass(authData: AuthData) {
    return this.httpService.postToUrl<AuthData>(environment.service + '/user/sendPasswordResetLink', authData);
  }


  getUser() {
    return this.httpService.getFromUrl(environment.service + '/getUser');
  }

   get isAuth() {
    return !!localStorage.getItem(this.TOKEN_KEY);
  }

  getAllRoles() {
    var reqHeader = new HttpHeaders({ 'No-Auth': 'True' });
    return this.httpService.getFromUrl(environment.service + '/api/GetAllRoles', { headers: reqHeader });
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

  private authSuccessfully() {
    this.authChange.next(true);
    this.router.navigate(['/']);
  }
}
