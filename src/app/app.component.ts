import { Component, OnInit } from '@angular/core';
import { LocalStorageService, SessionStorageService } from 'ngx-webstorage';
import { Router } from '@angular/router';
import { LoginService } from './shared/services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent  implements OnInit {
  validate = false;
  constructor(
    private localStorage: LocalStorageService,
    private sessionStorage: SessionStorageService,
    private router: Router,
    public loginService: LoginService
  ) {
    this.validate = this.loginService.isLogged;
  }

  ngOnInit() {
  }

  logout() {
    this.localStorage.clear('authenticationToken');
    this.localStorage.clear('empleado');
    this.localStorage.clear('idEmpleado');
    this.localStorage.clear('control');
    this.localStorage.clear('lineaEnvasado');
    this.localStorage.clear('controlDiario');
    this.router.navigateByUrl('/login');
    this.validate = false;
    this.loginService.changeLogin(false);
  }
}
