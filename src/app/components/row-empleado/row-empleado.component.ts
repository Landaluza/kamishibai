import { Component, OnInit } from '@angular/core';
import { now } from 'moment';
import { EmpleadoService } from '../../shared/services/empleado.service';
import { ControlService } from '../../shared/services/control.service';
import { ControlDiarioService } from '../../shared/services/controlDiario.service';
import { LineaEnvasadoService } from '../../shared/services/lineaEnvasado.service';
import { TarjetaControlService } from 'src/app/shared/services/tarjetaControl.service';
import { IEmpleado, Empleado } from '../../shared/models/empleado.model';
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
    private empleadoService: EmpleadoService,
    private controlService: ControlService,
    private controlDiarioService: ControlDiarioService,
    private lineaEnvasadoService: LineaEnvasadoService,
    private tarjetaControlService: TarjetaControlService,
    private localStorage: LocalStorageService
    ) { }

  ngOnInit() {
    this.empleado = this.localStorage.retrieve('empleado');
  }

}
