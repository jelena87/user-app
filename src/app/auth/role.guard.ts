import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import decode from 'jwt-decode';

import { AuthService } from './auth.service';

@Injectable()
export class RoleGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):  boolean {
      if (localStorage.getItem('userToken') != null)
      {
        let roles = next.data["roles"] as Array<string>;
        if (roles) {
          var match = this.authService.roleMatch(roles);
          if (match) return true;
          else {
            this.router.navigate(['/']);
            return false;
          }
        }
        else
          return true;
      }
      this.router.navigate(['/login']);
      return false;
  }

}
