import { Component, OnInit } from '@angular/core';
import { IEmpleado } from '../../shared/models/empleado.model';
import { LocalStorageService } from 'ngx-webstorage';
import { Router } from '@angular/router';
import { ITarjetaControl } from '../../shared/models/tarjetaControl.model';
import { TarjetaControlService } from '../../shared/services/tarjetaControl.service';
import { IControlDiario } from '../../shared/models/controlDiario.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  empleado: IEmpleado;
  tarjetasControl: ITarjetaControl[];
  constructor(
    private localStorage: LocalStorageService,
    private router: Router,
    private tarjetaControlService: TarjetaControlService
  ) { }

  ngOnInit() {
    this.empleado = this.localStorage.retrieve('idEmpleado');
    const controlDiarioExist: IControlDiario = this.localStorage.retrieve('controlDiario');
    if (!controlDiarioExist) {
      this.router.navigate(['/linea']);
    }
    const date = new Date();

    if (date.getHours() >= 8 && date.getHours() < 9) {
      console.log('entro en hora');
    }
    console.log(controlDiarioExist);
    this.tarjetaControlService.queryAllByControlDiario(controlDiarioExist.idControlDiario).subscribe(response => {
      this.tarjetasControl = response.body;
    });
  }

  loadTarjetas(tarjetasControl: ITarjetaControl[]) {
    this.tarjetasControl = tarjetasControl;
  }
}
