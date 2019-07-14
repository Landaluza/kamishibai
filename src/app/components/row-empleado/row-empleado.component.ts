import { Component, OnInit } from '@angular/core';
import { now } from 'moment';
import { EmpleadoService } from '../../shared/services/empleado.service';
import { ControlService } from '../../shared/services/control.service';
import { ControlDiarioService } from '../../shared/services/controlDiario.service';
import { LineaEnvasadoService } from '../../shared/services/lineaEnvasado.service';
import { TarjetaControlService } from 'src/app/shared/services/tarjetaControl.service';

@Component({
  selector: 'app-row-empleado',
  templateUrl: './row-empleado.component.html',
  styleUrls: ['./row-empleado.component.css']
})
export class RowEmpleadoComponent implements OnInit {
  fecha = now();
  fechaCompleta = new Date();
  version = '0.0.5';

  constructor(
    private empleadoService: EmpleadoService,
    private controlService: ControlService,
    private controlDiarioService: ControlDiarioService,
    private lineaEnvasadoService: LineaEnvasadoService,
    private tarjetaControlService: TarjetaControlService,
    ) { }

  ngOnInit() {
    this.empleadoService.queryAll().subscribe(result => {
      console.log(result.body);
    });
    this.controlService.queryAll().subscribe(result => {
      console.log(result.body);
    });
    this.controlDiarioService.queryAll().subscribe(result => {
      console.log(result.body);
    });
    this.lineaEnvasadoService.queryAll().subscribe(result => {
      console.log(result.body);
    });
    this.tarjetaControlService.queryAll().subscribe(result => {
      console.log(result.body);
    });
  }

}
