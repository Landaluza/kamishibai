import { Component, OnInit } from '@angular/core';
import { ControlDiarioService } from '../../../shared/services/controlDiario.service';
import { LocalStorageService } from 'ngx-webstorage';
import { Router } from '@angular/router';
import { IControlDiario, ControlDiario } from '../../../shared/models/controlDiario.model';
import { ILineaEnvasado } from '../../../shared/models/lineaEnvasado.model';
import { IControl } from '../../../shared/models/control.model';
import * as moment from 'moment';
import { ITarjetaControl, TarjetaControl } from '../../../shared/models/tarjetaControl.model';
import { TarjetaControlService } from '../../../shared/services/tarjetaControl.service';

@Component({
  selector: 'app-control-diario',
  templateUrl: './control-diario.component.html',
  styleUrls: ['./control-diario.component.css']
})
export class ControlDiarioComponent implements OnInit {

  controlesDiarios: IControlDiario[];
  tarjetasControles: ITarjetaControl;
  idEmpleado: number;
  linea: ILineaEnvasado;
  control: IControl;
  enFecha: boolean;

  constructor(
    private controlDiarioService: ControlDiarioService,
    private localStorage: LocalStorageService,
    private router: Router,
    private tarjetaControlService: TarjetaControlService
  ) { }

  ngOnInit() {
    const controlDiarioExist: IControlDiario = this.localStorage.retrieve('controlDiario');
    if (controlDiarioExist) {
      this.router.navigate(['/home']);
    }
    this.linea = this.localStorage.retrieve('lineaEnvasado');
    this.control = this.localStorage.retrieve('control');
    this.idEmpleado = this.localStorage.retrieve('idEmpleado');
    this.controlDiarioService.findAllByEmpleado(this.idEmpleado).subscribe(response => {
      this.controlesDiarios = response.body;
      this.controlesDiarios.forEach(cd => {
        const date = moment().format('YYYY-MM-DD');
        if (date === cd.fecha.toLocaleString()) {
          console.log('son iguales');
          this.enFecha = true;
        } else {
          console.log('no son iguales');
          this.enFecha = false;
        }
      });
    });
  }

  loadTareas() {
    const controlDiario = new ControlDiario();
    controlDiario.idControl = this.control.idControl;
    controlDiario.idEmpleado = this.idEmpleado;
    controlDiario.fecha = moment().format('YYYY-MM-DD HH:mm:ss');
    console.log(moment().format('YYYY-MM-DD HH:mm:ss'));
    controlDiario.turno = 1;
    this.controlDiarioService.create(controlDiario).subscribe(response => {
      console.log(response.body);
      const controlDiarioResponse = response.body;
      this.localStorage.store('controlDiario', controlDiarioResponse);
      let hora = 7;
      for (let index = 0; index < 8; index++) {
        console.log(index);
        const tarjetaControl = new TarjetaControl();
        tarjetaControl.idControlDiario = controlDiarioResponse.idControlDiario;
        tarjetaControl.descripcion = 'Verificar que no existen cristales en la zona.';
        tarjetaControl.horaTarea = hora.toString().padStart(2, '0') + ':00 a ' + (hora + 1).toString().padStart(2, '0') + ':00';
        hora = hora + 1;
        this.tarjetaControlService.create(tarjetaControl).subscribe(resp => {
          console.log('ok');
          console.log(response);
        });
        console.log(tarjetaControl);
      }
      this.enFecha = true;
    });

  }

  previousState() {
    this.localStorage.clear('control');
    window.history.back();
  }

  irAHome() {
    this.router.navigate(['/home']);
  }

}
