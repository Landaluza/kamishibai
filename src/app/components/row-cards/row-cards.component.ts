import {
  Component,
  Renderer2,
  ElementRef,
  OnInit,
  ViewChildren,
  QueryList
} from '@angular/core';

import * as moment from 'moment';
import Swal from 'sweetalert2';
import { HechoService } from '../../services/hecho.service';

@Component({
  selector: 'app-row-cards',
  templateUrl: './row-cards.component.html',
  styleUrls: ['./row-cards.component.css']
})

export class RowCardsComponent implements OnInit {

  cards = [
    { id: 7},
    { id: 8},
    { id: 9},
    { id: 10},
    { id: 11},
    { id: 12},
    { id: 13},
    { id: 14}
  ];

  @ViewChildren('card') eleCards: QueryList<ElementRef>;
  @ViewChildren('boton') eleBoton: QueryList<ElementRef>;
  @ViewChildren('botonLimpieza') eleBotonLimpieza: QueryList<ElementRef>;
  @ViewChildren('imagen') eleImagen: QueryList<ElementRef>;
  @ViewChildren('texto1') eleTexto1: QueryList<ElementRef>;
  @ViewChildren('texto2') eleTexto2: QueryList<ElementRef>;
  @ViewChildren('texto3') eleTexto3: QueryList<ElementRef>;


  imgs: string[] = [];
  i: number;

  // time = new Date();
  time: Date;

  // public horaControl = this.time.getHours();
  horaControl: number;
  fecha = new Date();
  //  fecha1 = '2019.01.23';

  constructor(
    private renderer: Renderer2,
    private hechoService: HechoService
  ) {}

  ngOnInit() {
  // setInterval(this.concienciacion, 30000);
  }

    onClickHecho(index: number) {
    this.time = new Date();
    this.horaControl = this.time.getHours();
    // console.log('Hora:', this.horaControl, 'Index:', (index));
    // https://medium.com/free-code-camp/how-to-use-the-javascript-console-going-beyond-console-log-5128af9d573b
    // console.log('%c Hora ',
    //         'color: white; background-color: #2274A5',
    //         this.horaControl, this.time);
    if ( this.horaControl < (index + 7) ) {

      this.mensajeControlAntesHora();
    } else {
      const card = this.eleCards.toArray()[index];
      const boton = this.eleBoton.toArray()[index];
      const botonLimpieza = this.eleBotonLimpieza.toArray()[index];
      const imagen = this.eleImagen.toArray()[index];
      const texto1 = this.eleTexto1.toArray()[index];
      const texto2 = this.eleTexto2.toArray()[index];
      const texto3 = this.eleTexto3.toArray()[index];
      this.renderer.setStyle(boton.nativeElement, 'visibility', 'hidden' );
      this.renderer.setStyle(botonLimpieza.nativeElement, 'visibility', 'hidden' );
      this.renderer.setStyle(texto1.nativeElement, 'visibility', 'hidden' );
      this.renderer.setStyle(texto2.nativeElement, 'visibility', 'hidden' );
      this.renderer.setStyle(texto3.nativeElement, 'visibility', 'hidden' );
      this.renderer.setAttribute(imagen.nativeElement, 'src', '../assets/img/OK.png' );
      if (this.horaControl <= (index + 7)) {
          this.renderer.setStyle(card.nativeElement, 'backgroundColor', 'green' );
          this.hechoService.hecho.emit({ boton : index, enHora : true, el : index, hora: this.horaControl, todoOK: true});
      } else {
          this.mensajeControlDespuesHora();
          this.hechoService.hecho.emit({boton : index, enHora : false, el : index, hora: this.horaControl, todoOK: true });
          this.renderer.setStyle(card.nativeElement, 'backgroundColor', 'orange' );
      }
    }
  }

  onClickHechoLimpieza(index: number) {
    this.time = new Date();
    this.horaControl = this.time.getHours();
    // console.log('Hora:', this.horaControl, 'Index:', (index));
    if ( this.horaControl < (index + 7) ) {
      this.mensajeControlAntesHora();
    } else {
      const card = this.eleCards.toArray()[index];
      const boton = this.eleBoton.toArray()[index];
      const botonLimpieza = this.eleBotonLimpieza.toArray()[index];
      const imagen = this.eleImagen.toArray()[index];
      const texto1 = this.eleTexto1.toArray()[index];
      const texto2 = this.eleTexto2.toArray()[index];
      const texto3 = this.eleTexto3.toArray()[index];
      this.renderer.setStyle(boton.nativeElement, 'visibility', 'hidden' );
      this.renderer.setStyle(botonLimpieza.nativeElement, 'visibility', 'hidden' );
      this.renderer.setStyle(texto1.nativeElement, 'visibility', 'hidden' );
      this.renderer.setStyle(texto2.nativeElement, 'visibility', 'hidden' );
      this.renderer.setStyle(texto3.nativeElement, 'visibility', 'hidden' );
      this.renderer.setAttribute(imagen.nativeElement, 'src', '../assets/img/barrer.jpg' );
      if (this.horaControl <= (index + 7)) {
         this.renderer.setStyle(card.nativeElement, 'backgroundColor', 'green' );
         this.hechoService.hecho.emit({ boton : index, enHora : true, el : index, hora: this.horaControl, todoOK: true});
      } else {
         this.mensajeControlDespuesHora();
         this.hechoService.hecho.emit({boton : index, enHora : false, el : index, hora: this.horaControl, todoOK: true });
         this.renderer.setStyle(card.nativeElement, 'backgroundColor', 'orange' );
      }
    }
  }

  mensajeControlDespuesHora() {
    Swal.fire({
      title: '¡Control despues de su hora!',
      text: 'Es importante que respetes los horarios de cada control.',
      imageUrl: '../assets/img/alerta.jpg',
      imageWidth: 400,
      imageHeight: 400,
      imageAlt: 'Imagen',
      animation: true
    });
  }

  mensajeControlAntesHora() {
    Swal.fire({
      title: '¡Control antes de su hora!',
      text: 'Es importante que respetes los horarios de cada control.',
      imageUrl: '../assets/img/reloj.jpg',
      imageWidth: 400,
      imageHeight: 400,
      imageAlt: 'Imagen',
      animation: true
    });
  }

  concienciacion() {
    this.imgs = ['alerta.jpg', 'PisaCristal.jpg', 'BotellaRota.png'],
    this.i = Math.floor(Math.random() * this.imgs.length);
    // console.log(this.i);
    Swal.fire({
      title: '¿Por qué es importante que no existan cristales?',
      imageUrl: '../assets/img/concienciacion/' + this.imgs[this.i],
      imageWidth: 700,
      imageHeight: 500,
      imageAlt: 'Imagen',
      animation: true
    });
  }

}
