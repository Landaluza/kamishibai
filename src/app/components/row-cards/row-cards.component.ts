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

  imgs: string[] = [];
  i: number;

  time = new Date();
  public horaControl = this.time.getHours();
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
    if ( this.horaControl < (index + 7) ) {
      this.mensajeControlAntesHora();
    } else {
      const card = this.eleCards.toArray()[index];
      const boton = this.eleBoton.toArray()[index];
      this.renderer.setStyle(boton.nativeElement, 'visibility', 'hidden' );

      if (this.horaControl < (index + 8)) {
          this.renderer.setStyle(card.nativeElement, 'backgroundColor', 'green' );
          this.hechoService.hecho.emit({ boton : index, enHora : true, el : index, hora: this.horaControl});
      } else {
          this.mensajeControlDespuesHora();
          this.hechoService.hecho.emit({boton : index, enHora : false, el : index, hora: this.horaControl });
          this.renderer.setStyle(card.nativeElement, 'backgroundColor', 'orange' );
      }
    }
  }

  mensajeControlDespuesHora() {
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
