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
    console.log(control);
    // this.router.navigateByUrl('/control-diario');
    const date = new Date();
    this.turnos.forEach(turno => {
      console.log(turno);
      // console.log(date.getHours());
      // console.log(date);
      // console.log(date.getTime());

      if (date.getHours() >= turno.desde && date.getHours() <= turno.hasta) {
        console.log(turno);
        const controlDiario = new ControlDiario();
        controlDiario.idControl = control.idControl;
        controlDiario.idEmpleado = this.idEmpleado;
        controlDiario.fecha = new Date();
        controlDiario.idtTurno = turno.idtTurno;
        this.controlDiarioService.create(controlDiario).subscribe(response => {
          console.log(response.body);
          const controlDiarioResponse = response.body;
          this.localStorage.store('controlDiario', controlDiarioResponse);
          let hora = +turno.desde;
          for (let index = 0; index < 8; index++) {
            console.log(index);
            console.log(hora);
            const tarjetaControl = new TarjetaControl();
            tarjetaControl.idControlDiario = controlDiarioResponse.idControlDiario;
            tarjetaControl.descripcion = 'Verificar que no existen cristales en la zona.';
            tarjetaControl.horaTarea = hora.toString().padStart(2, '0') + ':00 a ' + (hora + 1).toString().padStart(2, '0') + ':00';
            hora = hora + 1;
            tarjetaControl.createdAt = new Date();
            this.tarjetaControlService.create(tarjetaControl).subscribe(resp => {
              console.log('ok');
              console.log(response);
              if (index === 7) {
                this.router.navigate(['/home']);
              }
            });
            console.log(tarjetaControl);
          }
          // this.enFecha = true;
        });
      }
    });
  }

  previousState() {
    this.localStorage.clear('lineaEnvasado');
    window.history.back();
  }
}
