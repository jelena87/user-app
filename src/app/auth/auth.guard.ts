import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService,
              private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
      if(this.authService.isAuth()) {
        return true;
      } else {
        this.router.navigate(['/login']);
        return false;
      }
  }

  /* canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):  boolean {
      if (localStorage.getItem('userToken') != null)
      {
        let roles = next.data["roles"] as Array<string>;
        if (roles) {
          var match = this.authService.roleMatch(roles);
          if (match) return true;
          else {
            this.router.navigate(['/forbidden']);
            return false;
          }
        }
        else
          return true;
      }
      this.router.navigate(['/login']);
      return false;
  } */
}
