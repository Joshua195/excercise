import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Injectable} from '@angular/core';

import {ROUTES} from '../../consts/routes';
import {AuthService} from '../services/auth.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate{
  public routers: typeof ROUTES = ROUTES;

  constructor(
    private router: Router,
    private authService: AuthService
  ) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const user = this.authService.getUser();
    if (user) {
      return true;
    } else {
      this.router.navigate([this.routers.DASHBOARD]);
    }
  }
}
