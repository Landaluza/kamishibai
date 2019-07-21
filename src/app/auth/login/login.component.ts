import { Component, OnInit } from '@angular/core';
import { IEmpleado, Empleado } from '../../shared/models/empleado.model';
import { LoginService } from '../../shared/services/login.service';
import { Router } from '@angular/router';
import { LocalStorageService } from 'ngx-webstorage';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  empleado: IEmpleado;
  constructor(
    private loginService: LoginService,
    private router: Router,
    private localStorage: LocalStorageService
    ) { }

  ngOnInit() {
    this.empleado = new Empleado();
  }

  login() {
    console.log(this.empleado);
    this.loginService.login(this.empleado).subscribe(response => {
      console.log(response.body);
      if (response.body) {
        this.localStorage.store('authenticationToken', response.body.userName);
        this.router.navigate(['/home']);
      } else {
        console.log('no encontro nada');
      }
    }, error => {
      console.log('error en servicio');
    });
  }
}
