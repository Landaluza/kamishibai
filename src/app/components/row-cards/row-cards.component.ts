import {
  Component,
  Renderer2,
  ViewChild,
  ElementRef,
  OnInit
  } from '@angular/core';

import * as moment from 'moment';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-row-cards',
  templateUrl: './row-cards.component.html',
  styleUrls: ['./row-cards.component.css']
})
export class RowCardsComponent implements OnInit {

  @ViewChild('card7', { static: false }) card7: ElementRef;
  @ViewChild('hora7', { static: false }) hora7: ElementRef;
  @ViewChild('elHoraControl7', { static: false }) elHoraControl7: ElementRef;
  @ViewChild('boton7', { static: false }) boton7: ElementRef;

  @ViewChild('card8', { static: false }) card8: ElementRef;
  @ViewChild('hora8', { static: false }) hora8: ElementRef;
  @ViewChild('elHoraControl8', { static: false }) elHoraControl8: ElementRef;
  @ViewChild('boton8', { static: false }) boton8: ElementRef;

  @ViewChild('card9', { static: false }) card9: ElementRef;
  @ViewChild('hora9', { static: false }) hora9: ElementRef;
  @ViewChild('elHoraControl9', { static: false }) elHoraControl9: ElementRef;
  @ViewChild('boton9', { static: false }) boton9: ElementRef;

 verBoton7 = true;
 horaControl7: string;
 verBoton8 = true;
 horaControl8: string;
 verBoton9 = true;
 horaControl9: string;
 fecha = new Date();
//  fecha1 = '2019.01.23';

// minutos: any;
title = 'Tablero kamizibai';
tiempo = moment().startOf('hour').fromNow();
constructor(private renderer: Renderer2) {
 }

  ngOnInit() {
  }

  onClickHecho(numCard: number) {
    switch (numCard) {
    case 0:
    this.horaControl7 = moment().format('LT');
    // console.log(typeof(this.tiempo));
    // alert('Hora: ' + this.fecha.getMinutes());
    // si la hora en que se ha pulsado el botón es superior al rango de hora establecido
    // para el control lo pintamos en naranja, si correcto en verde.
    if ( this.horaControl7 > '07:00 AM') {

      Swal.fire({
        title: '¡Control fuera de hora!',
        text: 'Es importante que respetes los horarios de cada control.',
        imageUrl: '../assets/img/alerta.jpg',
        imageWidth: 400,
        imageHeight: 400,
        imageAlt: 'Imagen',
        animation: true
      });

      this.renderer.setStyle(this.card7.nativeElement, 'backgroundColor', 'orange');
      // this.renderer.setStyle(this.hora7.nativeElement, 'backgroundColor', 'orange');
      // this.renderer.setStyle(this.hora7.nativeElement, 'padding', '15px');
      // this.renderer.setStyle(this.elHoraControl7.nativeElement, 'backgroundColor', 'orange');
      // this.renderer.setStyle(this.elHoraControl7.nativeElement, 'padding', '15px');
      this.verBoton7 = false;
      console.log('Valor verBoton7: ', this.verBoton7);
    } else {
      this.renderer.setStyle(this.card7.nativeElement, 'backgroundColor', 'green');
      // this.renderer.setStyle(this.hora7.nativeElement, 'backgroundColor', 'green');
      // this.renderer.setStyle(this.hora7.nativeElement, 'padding', '15px');
      // this.renderer.setStyle(this.elHoraControl7.nativeElement, 'backgroundColor', 'green');
      // this.renderer.setStyle(this.elHoraControl7.nativeElement, 'padding', '15px');
      this.verBoton7 = false;
    }

    console.log('El control se ha hecho a  las ' + this.horaControl7);
    break;
    case 1:
      this.renderer.setStyle(this.card8.nativeElement, 'backgroundColor', 'green');
      // this.renderer.setStyle(this.hora8.nativeElement, 'backgroundColor', 'green');
      // this.renderer.setStyle(this.hora8.nativeElement, 'padding', '15px');
      // this.renderer.setStyle(this.elHoraControl8.nativeElement, 'backgroundColor', 'green');
      // this.renderer.setStyle(this.elHoraControl8.nativeElement, 'padding', '15px');
      this.verBoton8 = false;
      this.horaControl8 = moment().format('LT');
      break;
  }
}
}







