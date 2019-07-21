import { Component, OnInit } from '@angular/core';
import { IEmpleado, Empleado } from '../../shared/models/empleado.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  empleado: IEmpleado;
  constructor() { }

  ngOnInit() {
    this.empleado = new Empleado();
  }

  login() {
    console.log(this.empleado);
  }
}
