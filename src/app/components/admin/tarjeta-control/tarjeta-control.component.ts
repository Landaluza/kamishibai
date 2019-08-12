import { Component, OnInit } from '@angular/core';
import { TarjetaControlService } from 'src/app/shared/services/tarjetaControl.service';
import { ITarjetaControl } from '../../../shared/models/tarjetaControl.model';

@Component({
  selector: 'app-tarjeta-control',
  templateUrl: './tarjeta-control.component.html',
  styleUrls: ['./tarjeta-control.component.css']
})
export class TarjetaControlComponent implements OnInit {

  tarjetas: ITarjetaControl[];

  constructor(private tarjetaControlService: TarjetaControlService) { }

  ngOnInit() {
    this.tarjetaControlService.queryAll().subscribe(response => {
      this.tarjetas = response.body;
    });
  }

  trackIdentity(index: number, item: ITarjetaControl) {
    return item.idTarjetaControl;
  }

}
