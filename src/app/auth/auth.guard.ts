import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LocalStorageService, SessionStorageService } from 'ngx-webstorage';
import { LoginService } from '../shared/services/login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild {
  constructor(
    private router: Router,
    private localStorage: LocalStorageService,
    private sessionStorage: SessionStorageService,
    public loginService: LoginService
    ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.autenticated();
  }

  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.canActivate(next, state);
  }

  private autenticated() {
    const token = this.localStorage.retrieve('authenticationToken') || this.sessionStorage.retrieve('authenticationToken');
    console.log(token);
    if (!token) {
      this.router.navigateByUrl('/login');
      this.loginService.changeLogin(false);
      console.log(this.loginService.isLogged);
      return false;
    }

    // const empresa: IEmpresa = this.localStorage.retrieve('empresa') || this.sessionStorage.retrieve('empresa');
    // if (!empresa || !empresa.id) {
    //   this.router.navigateByUrl('/admin/account/settings');
    //   return false;
    // }
    console.log(this.loginService.isLogged);
    this.loginService.changeLogin(true);
    return true;
  }
}
