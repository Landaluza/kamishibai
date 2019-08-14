import { Component, OnInit } from '@angular/core';
import { now } from 'moment';
import { IEmpleado } from '../../shared/models/empleado.model';
import { LocalStorageService } from 'ngx-webstorage';

@Component({
  selector: 'app-row-empleado',
  templateUrl: './row-empleado.component.html',
  styleUrls: ['./row-empleado.component.css']
})
export class RowEmpleadoComponent implements OnInit {
  fecha = now();
  fechaCompleta = new Date();
  version = '1.0.5';
  empleado: IEmpleado;

  constructor(
    private localStorage: LocalStorageService
    ) { }

  ngOnInit() {
    this.empleado = this.localStorage.retrieve('empleado');
  }

}
