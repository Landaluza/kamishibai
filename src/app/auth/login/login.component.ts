import { Component, OnInit } from '@angular/core';
import { IEmpleado, Empleado } from '../../shared/models/empleado.model';
import { LoginService } from '../../shared/services/login.service';
import { Router } from '@angular/router';
import { LocalStorageService } from 'ngx-webstorage';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  empleado: IEmpleado;
  constructor(
    public loginService: LoginService,
    private router: Router,
    private localStorage: LocalStorageService,
    private snackBar: MatSnackBar
    ) { }

  ngOnInit() {
    this.empleado = new Empleado();
  }

  login() {
    this.loginService.login(this.empleado).subscribe(response => {
      if (response.body) {
        this.localStorage.store('authenticationToken', response.body.rol);
        this.router.navigate(['/home']);
        this.loginService.changeLogin(true);
      } else {
        this.loginService.changeLogin(false);
        this.openSnackBar('Usuario o Contraseña son incorrectos', 'Login');
      }
    }, error => {
      console.log('error en servicio');
      this.openSnackBar('Usuario o Contraseña son incorrectos', 'Login');
    });
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }
}
