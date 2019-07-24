import { Component, OnInit } from '@angular/core';
import { IEmpleado } from '../../shared/models/empleado.model';
import { LocalStorageService } from 'ngx-webstorage';
import * as moment from 'moment';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  empleado: IEmpleado;
  constructor(
    private localStorage: LocalStorageService
  ) { }

  ngOnInit() {
    this.empleado = this.localStorage.retrieve('idEmpleado');
    const date = new Date();
    console.log(moment(date, 'hh:mm').format());

    if (date.getHours() >= 8 && date.getHours() < 9) {
      console.log('entro en hora');
    }
  }
}
