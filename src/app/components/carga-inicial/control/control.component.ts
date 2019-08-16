import { Component, OnInit } from '@angular/core';
import { ControlService } from '../../../shared/services/control.service';
import { IControl } from '../../../shared/models/control.model';
import { LocalStorageService } from 'ngx-webstorage';
import { ILineaEnvasado } from '../../../shared/models/lineaEnvasado.model';
import { Router } from '@angular/router';
import { TurnoService } from '../../../shared/services/turno.service';
import { ITurno } from '../../../shared/models/turno.model';
import { IControlDiario, ControlDiario } from '../../../shared/models/controlDiario.model';
import { ControlDiarioService } from '../../../shared/services/controlDiario.service';
import { TarjetaControlService } from '../../../shared/services/tarjetaControl.service';
import { TarjetaControl } from '../../../shared/models/tarjetaControl.model';
import * as moment from 'moment';

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.css']
})
export class ControlComponent implements OnInit {

  turnos: ITurno[];
  controlDiario: IControlDiario;
  controles: IControl[];
  idEmpleado: number;
  linea: ILineaEnvasado;

  constructor(
    private controlService: ControlService,
    private localStorage: LocalStorageService,
    private router: Router,
    private turnoService: TurnoService,
    private controlDiarioService: ControlDiarioService,
    private tarjetaControlService: TarjetaControlService
  ) { }

  ngOnInit() {
    const linea: ILineaEnvasado = this.localStorage.retrieve('lineaEnvasado');
    this.idEmpleado = this.localStorage.retrieve('idEmpleado');
    this.controlService.findByLinea(linea.idLineaEnvasado).subscribe(response => {
      this.controles = response.body;
    });
    this.turnoService.queryAll().subscribe(response => {
      this.turnos = response.body;
    });
  }

  seleccionarControl(control: IControl) {
    this.localStorage.store('control', control);
    // this.router.navigateByUrl('/control-diario');
    const date = new Date();
    this.turnos.forEach(turno => {

      if (date.getHours() >= turno.desde && date.getHours() < turno.hasta) {
        this.cargaDatos(turno, control);
      } else {
        if (date.getHours() === +turno.desde && date.getHours() === 23) {
          this.cargaDatos(turno, control);
        } else {
          if (date.getHours() >= 0 && date.getHours() < 7) {
            this.cargaDatos(turno, control);
          }
        }
      }
    });
  }

  private cargaDatos(turno: ITurno, control: IControl) {
    const controlDiario = new ControlDiario();
    controlDiario.idControl = control.idControl;
    controlDiario.idEmpleado = this.idEmpleado;
    controlDiario.fecha = moment(new Date()).format('YYYY-MM-DD HH:mm:ss');
    controlDiario.idtTurno = turno.idtTurno;
    this.controlDiarioService.create(controlDiario).subscribe(response => {
      const controlDiarioResponse = response.body;
      this.localStorage.store('controlDiario', controlDiarioResponse);
      let hora = +turno.desde;
      for (let index = 0; index < 8; index++) {
        const tarjetaControl = new TarjetaControl();
        tarjetaControl.idControlDiario = controlDiarioResponse.idControlDiario;
        switch (index) {
          case 0:
            tarjetaControl.descripcion = control.descripcionTarjeta1;
            break;
          case 1:
            tarjetaControl.descripcion = control.descripcionTarjeta2;
            break;
          case 2:
            tarjetaControl.descripcion = control.descripcionTarjeta3;
            break;
          case 3:
            tarjetaControl.descripcion = control.descripcionTarjeta4;
            break;
          case 4:
            tarjetaControl.descripcion = control.descripcionTarjeta5;
            break;
          case 5:
            tarjetaControl.descripcion = control.descripcionTarjeta6;
            break;
          case 6:
            tarjetaControl.descripcion = control.descripcionTarjeta7;
            break;
          case 7:
            tarjetaControl.descripcion = control.descripcionTarjeta8;
            break;
          default:
            break;
        }

        tarjetaControl.horaTarea = hora.toString().padStart(2, '0') + ':00 a '
          + (hora + 1 === 24 ? 0 : hora + 1).toString().padStart(2, '0') + ':00';
        tarjetaControl.horaDesde = +hora.toString().padStart(2, '0');
        tarjetaControl.horaHasta = +(hora + 1).toString().padStart(2, '0');
        tarjetaControl.orden = index;

        hora = hora + 1;
        if (hora === 24) {
          hora = 0;
        }

        this.tarjetaControlService.create(tarjetaControl).subscribe(resp => {
          console.log('ok');
          if (index === 7) {
            this.router.navigate(['/home']);
          }
        });
      }
    });
  }

  previousState() {
    this.localStorage.clear('lineaEnvasado');
    window.history.back();
  }
}
