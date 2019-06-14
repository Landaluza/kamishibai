import { Component, OnInit, Renderer2, ViewChild, ElementRef, } from '@angular/core';
import * as moment from 'moment';
@Component({
  selector: 'app-row-horas-control',
  templateUrl: './row-horas-control.component.html',
  styleUrls: ['./row-horas-control.component.css']
})
export class RowHorasControlComponent implements OnInit {

@ViewChild('elHoraControl7', { static: false }) elHoraControl7: ElementRef;

horaControl7: string;
horaControl8: string;
horaControl9: string;

onPulsado = false;

  constructor( private renderer: Renderer2 ) { }

  ngOnInit() {
  }

  onClickHecho(numCard: number) {
    switch (numCard) {
    case 0:
    this.horaControl7 = moment().format('LT');
    this.renderer.setStyle(this.elHoraControl7.nativeElement, 'backgroundColor', 'green');
    this.renderer.setStyle(this.elHoraControl7.nativeElement, 'padding', '15px');
    break;
  }
}


prueba(pulsado: boolean) {
  console.log('row-horas-control: Se ha pulsado HECHO');
    }

}
