import { Component, OnInit, Renderer2, ViewChildren, QueryList, ElementRef, Input } from '@angular/core';
import * as moment from 'moment';
// import * as moment from 'moment-timezone';
import { HechoService } from '../../services/hecho.service';
import { ITarjetaControl } from '../../shared/models/tarjetaControl.model';
import { TarjetaControlService } from '../../shared/services/tarjetaControl.service';
import { LocalStorageService } from 'ngx-webstorage';
import { IControlDiario } from '../../shared/models/controlDiario.model';
@Component({
  selector: 'app-row-horas-control',
  templateUrl: './row-horas-control.component.html',
  styleUrls: ['./row-horas-control.component.css']
})

export class RowHorasControlComponent implements OnInit {
  @Input() tarjetasControl: ITarjetaControl[];
  cards = [
    { id: 7 },
    { id: 8 },
    { id: 9 },
    { id: 10 },
    { id: 11 },
    { id: 12 },
    { id: 13 },
    { id: 14 }
  ];

  @ViewChildren('eleHoraControl') eleHoraControl: QueryList<ElementRef>;

  constructor(
    private renderer: Renderer2,
    public hechoService: HechoService,
    private tarjetaControlService: TarjetaControlService,
    private localStorage: LocalStorageService
  ) {
  }

  ngOnInit() {
    // TODO:  Da error si asigno type Object a $Event.
    this.hechoService.hecho.subscribe(($Event: any) => {
      console.log('ENTRO AL HECHO EVENT');
      this.tarjetasControl = [];
      const horaControl = this.eleHoraControl.toArray()[$Event.boton];
      const controlDiarioExist: IControlDiario = this.localStorage.retrieve('controlDiario');
      this.tarjetaControlService.queryAllByControlDiario(controlDiarioExist.idControlDiario).subscribe(response => {
        this.tarjetasControl = response.body;
        this.tarjetasControl.forEach(tarjeta => {
        });
      });
      if ($Event.enHora) {
        this.renderer.setStyle(horaControl.nativeElement, 'backgroundColor', 'green');
      } else {
        this.renderer.setStyle(horaControl.nativeElement, 'backgroundColor', 'orange');
      }

      const div = this.renderer.createElement('div');
      const text = this.renderer.createText(moment().format('LT'));
      this.renderer.appendChild(div, text);
      this.renderer.appendChild(horaControl.nativeElement, div);
      this.renderer.setStyle(horaControl.nativeElement, 'padding', '15px');
    });
  }

}
