import {
  Component,
  Renderer2,
  AfterViewInit,
  ViewChild,
  ElementRef,
  OnInit,
  Output,
  EventEmitter
} from '@angular/core';

import * as moment from 'moment';
import Swal from 'sweetalert2';


export interface Tile {
  cols: number;
  rows: number;
  text: string;
  border: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  @ViewChild('card7', { static: false }) card7: ElementRef;
  @ViewChild('hora7', { static: false }) hora7: ElementRef;
  @ViewChild('elHoraControl7', { static: false }) elHoraControl7: ElementRef;
  @ViewChild('boton7', { static: false }) boton7: ElementRef;

  @ViewChild('card8', { static: false }) card8: ElementRef;
  @ViewChild('hora8', { static: false }) hora8: ElementRef;
  @ViewChild('elHoraControl8', { static: false }) elHoraControl8: ElementRef;
  @ViewChild('boton8', { static: false }) boton8: ElementRef;

 verBoton7 = true;
 horaControl7: string;

 verBoton8 = true;
 horaControl8: string;

  constructor(private renderer: Renderer2) {
      }

  // tiles = [
  //   { text: '7:00 a 8:00', cols: 1, rows: 1, color: '#ADD8E6' },
  //   { text: '8:00 a 9:00', cols: 1, rows: 1, color: '#ADD8E6' },
  //   { text: '9:00 a 10:00', cols: 1, rows: 1, color: '#ADD8E6' },
  //   { text: '10:00 a 11:00', cols: 1, rows: 1, color: '#ADD8E6' },
  //   { text: '11:00 a 12:00', cols: 1, rows: 1, color: '#ADD8E6' },
  //   { text: '12:00 a 13:00', cols: 1, rows: 1, color: '#ADD8E6' },
  //   { text: '13:00 a 14:00', cols: 1, rows: 1, color: '#ADD8E6' },
  //   { text: '14:00 a 15:00', cols: 1, rows: 1, color: '#ADD8E6' }
  // ];

  // tilesFooter = [
  //   { text: '1', cols: 1, rows: 1, color: '#ADD8E6' },
  //   { text: '2', cols: 1, rows: 1, color: '#ADD8E6' },
  //   { text: '3', cols: 1, rows: 1, color: '#ADD8E6' },
  //   { text: '4', cols: 1, rows: 1, color: '#ADD8E6' },
  //   { text: '5', cols: 1, rows: 1, color: '#ADD8E6' },
  //   { text: '6', cols: 1, rows: 1, color: '#ADD8E6' },
  //   { text: '7', cols: 1, rows: 1, color: '#ADD8E6' },
  //   { text: '8', cols: 1, rows: 1, color: '#ADD8E6' }
  // ];
  title = 'Tablero kamizibai';

  onClickHecho(numCard: number) {
      switch (numCard) {
      case 0:
      this.horaControl7 = moment().format('LT');
      // si la hora en que se ha pulsado el botón es superior al rango de hora establecido
      // para el control lo pintamos en amarillo, si correcto en verde.
      if ( this.horaControl7 > '7:00 PM') {

        Swal.fire({
          title: '¡Control fuera de hora!',
          text: 'Es importante que respetes los horarios de cada control.',
          imageUrl: '../assets/img/alerta.jpg',
          imageWidth: 400,
          imageHeight: 400,
          imageAlt: 'Custom image',
          animation: true
        });

        console.log('Te has pasado de la hora.');
        this.renderer.setStyle(this.card7.nativeElement, 'backgroundColor', 'orange');
        this.renderer.setStyle(this.hora7.nativeElement, 'backgroundColor', 'orange');
        this.renderer.setStyle(this.hora7.nativeElement, 'padding', '15px');
        this.renderer.setStyle(this.elHoraControl7.nativeElement, 'backgroundColor', 'orange');
        this.renderer.setStyle(this.elHoraControl7.nativeElement, 'padding', '15px');
        this.verBoton7 = false;
      } else
      {
      this.renderer.setStyle(this.card7.nativeElement, 'backgroundColor', 'green');
      this.renderer.setStyle(this.hora7.nativeElement, 'backgroundColor', 'green');
      this.renderer.setStyle(this.hora7.nativeElement, 'padding', '15px');
      this.renderer.setStyle(this.elHoraControl7.nativeElement, 'backgroundColor', 'green');
      this.renderer.setStyle(this.elHoraControl7.nativeElement, 'padding', '15px');
      this.verBoton7 = false;
      console.log('En hora.');
      }



      console.log('El control se ha hecho a  las ' + this.horaControl7);
      break;
      case 1:
        this.renderer.setStyle(this.card8.nativeElement, 'backgroundColor', 'green');
        this.renderer.setStyle(this.hora8.nativeElement, 'backgroundColor', 'green');
        this.renderer.setStyle(this.hora8.nativeElement, 'padding', '15px');
        this.renderer.setStyle(this.elHoraControl8.nativeElement, 'backgroundColor', 'green');
        this.renderer.setStyle(this.elHoraControl8.nativeElement, 'padding', '15px');
        this.verBoton8 = false;
        this.horaControl8 = moment().format('LT');
        break;
    }
  }
}
