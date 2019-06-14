import {
  Component,
  Renderer2,
  ViewChild,
  ElementRef,
  OnInit,
  Output,
  EventEmitter
  } from '@angular/core';

import * as moment from 'moment';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-row-cards',
  templateUrl: './row-cards.component.html',
  styleUrls: ['./row-cards.component.css']
})


export class RowCardsComponent implements OnInit {
  @Output() OnPulsado = new EventEmitter<boolean>();

  @ViewChild('card7', { static: false }) card7: ElementRef;
  @ViewChild('boton7', { static: false }) boton7: ElementRef;

  @ViewChild('card8', { static: false }) card8: ElementRef;
  @ViewChild('boton8', { static: false }) boton8: ElementRef;

  @ViewChild('card9', { static: false }) card9: ElementRef;
  @ViewChild('boton9', { static: false }) boton9: ElementRef;

 verBoton7 = true;
 verBoton8 = true;
 verBoton9 = true;

 time = new Date();
 public horaControl7 = this.time.getHours();

 horaControl8: string;
 horaControl9: string;

 fecha = new Date();
//  fecha1 = '2019.01.23';

// title = 'Tablero kamizibai';
// tiempo = moment().startOf('hour').fromNow();

constructor(private renderer: Renderer2) {
  // this.OnPulsado = new EventEmitter();
 }

  ngOnInit() {
  }

  onClickHecho(numCard: number) {
    switch (numCard) {
    case 0:
    // console.log(typeof(this.tiempo));
    // alert('Hora: ' + this.fecha.getMinutes());
    // si la hora en que se ha pulsado el botón es superior al rango de hora establecido
    // para el control lo pintamos en naranja, si correcto en verde.
     this.verBoton7 = false;

     if ( this.horaControl7 < 7) {
      this.mensajeControlFueraHora();
      this.renderer.setStyle(this.card7.nativeElement, 'backgroundColor', 'orange');
      // console.log('Valor verBoton7: ', this.verBoton7);
    } else {
      this.renderer.setStyle(this.card7.nativeElement, 'backgroundColor', 'green');
    }

    // Hay que emitir un evento para cambiar el color tambien en row-horas-control
     this.emitir();
     break;

    case 1:
      this.renderer.setStyle(this.card8.nativeElement, 'backgroundColor', 'green');
      this.verBoton8 = false;
      break;
  }
}

mensajeControlFueraHora() {
  Swal.fire({
    title: '¡Control fuera de hora!',
    text: 'Es importante que respetes los horarios de cada control.',
    imageUrl: '../assets/img/alerta.jpg',
    imageWidth: 400,
    imageHeight: 400,
    imageAlt: 'Imagen',
    animation: true
  });
}

emitir() {
  this.OnPulsado.emit(true);
  console.log('Emitir');
}


}







