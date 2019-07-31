import {
  Component,
  Renderer2,
  ElementRef,
  OnInit,
  ViewChildren,
  QueryList,
  Input
} from '@angular/core';

import * as moment from 'moment';
import Swal from 'sweetalert2';
import { HechoService } from '../../services/hecho.service';
import { LocalStorageService } from 'ngx-webstorage';
import { EmpleadoService } from '../../shared/services/empleado.service';
import { ITarjetaControl } from '../../shared/models/tarjetaControl.model';
import { Router } from '@angular/router';
import { TarjetaControlService } from '../../shared/services/tarjetaControl.service';
import { IControlDiario } from '../../shared/models/controlDiario.model';
import { now } from 'moment';

@Component({
  selector: 'app-row-cards',
  templateUrl: './row-cards.component.html',
  styleUrls: ['./row-cards.component.css']
})

export class RowCardsComponent implements OnInit {
  tarjetasControl: ITarjetaControl[];
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
    private hechoService: HechoService,
    private localStorageService: LocalStorageService,
    private empleadoService: EmpleadoService,
    private localStorage: LocalStorageService,
    private router: Router,
    private tarjetaControlService: TarjetaControlService
  ) { }

  ngOnInit() {
    // setInterval(this.concienciacion, 30000);
    this.loadAll();
  }

  loadAll() {
    const controlDiarioExist: IControlDiario = this.localStorage.retrieve('controlDiario');
    this.tarjetaControlService.queryAllByControlDiario(controlDiarioExist.idControlDiario).subscribe(response => {
      console.log(response);
      this.tarjetasControl = [];
      this.tarjetasControl = response.body;
      console.log(this.tarjetasControl);
      if (this.tarjetasControl.length > 0) {
        this.tarjetasControl.forEach((element, index) => {
          console.log(element);
          console.log(index);
          this.onClickHechoLoad(index, element);
          this.onClickHechoLimpiezaLoad(index, element);
        });
      }
    });
  }

  onClickHecho(index: number, tarjeta: ITarjetaControl) {
    this.time = new Date();
    this.horaControl = this.time.getHours();
    // console.log('Hora:', this.horaControl, 'Index:', (index));
    // https://medium.com/free-code-camp/how-to-use-the-javascript-console-going-beyond-console-log-5128af9d573b
    // console.log('%c Hora ',
    //         'color: white; background-color: #2274A5',
    //         this.horaControl, this.time);
    console.log(tarjeta);
    if (this.horaControl < (index + 7)) {
      this.mensajeControlAntesHora();
    } else {

      if (this.horaControl <= (index + 7)) {
        this.hechoService.hecho.emit({ boton: index, enHora: true, el: index, hora: this.horaControl });
        tarjeta.enHora = true;
      } else {
        this.mensajeControlDespuesHora();
        this.hechoService.hecho.emit({ boton: index, enHora: false, el: index, hora: this.horaControl });
        tarjeta.enHora = false;
      }
      tarjeta.resultado = 'revision';
      tarjeta.fechaHoraControl = moment(new Date()).format('YYYY-MM-DD HH:mm:ss');
      this.tarjetaControlService.update(tarjeta).subscribe(response => {
        console.log('ok');
        this.loadAll();
      });
    }
  }

  onClickHechoLimpieza(index: number, tarjeta: ITarjetaControl) {
    this.time = new Date();
    this.horaControl = this.time.getHours();
    console.log(tarjeta);
    console.log(this.horaControl);
    console.log(tarjeta.horaHasta);
    if (this.horaControl > +tarjeta.horaDesde && this.horaControl < +tarjeta.horaHasta) {
      this.mensajeControlAntesHora();
    } else {

      if (this.horaControl <= (index + 7)) {
        this.hechoService.hecho.emit({ boton: index, enHora: true, el: index, hora: this.horaControl });
        tarjeta.enHora = true;
      } else {
        this.mensajeControlDespuesHora();
        this.hechoService.hecho.emit({ boton: index, enHora: false, el: index, hora: this.horaControl });
        tarjeta.enHora = false;
      }
      tarjeta.resultado = 'limpieza';
      tarjeta.fechaHoraControl = moment(new Date()).format('YYYY-MM-DD HH:mm:ss');
      this.tarjetaControlService.update(tarjeta).subscribe(response => {
        console.log('ok');
        this.loadAll();
      });
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

  onClickHechoLoad(index: number, tarjeta: ITarjetaControl) {
    this.time = new Date();
    this.horaControl = this.time.getHours();

    if (tarjeta.resultado === 'revision') {
      // const card = this.eleCards.toArray()[index];
      // const boton = this.eleBoton.toArray()[index];
      // const botonLimpieza = this.eleBotonLimpieza.toArray()[index];
      // const imagen = this.eleImagen.toArray()[index];
      // const texto1 = this.eleTexto1.toArray()[index];
      // const texto2 = this.eleTexto2.toArray()[index];
      // const texto3 = this.eleTexto3.toArray()[index];
      // this.renderer.setStyle(boton.nativeElement, 'visibility', 'hidden');
      // this.renderer.setStyle(botonLimpieza.nativeElement, 'visibility', 'hidden');
      // this.renderer.setStyle(texto1.nativeElement, 'visibility', 'hidden');
      // this.renderer.setStyle(texto2.nativeElement, 'visibility', 'hidden');
      // this.renderer.setStyle(texto3.nativeElement, 'visibility', 'hidden');
      // this.renderer.setAttribute(imagen.nativeElement, 'src', '../assets/img/OK.png');
      if (tarjeta.enHora) {
        // this.renderer.setStyle(card.nativeElement, 'backgroundColor', 'green');
        this.hechoService.hecho.emit({ boton: index, enHora: true, el: index, hora: this.horaControl });
      } else {
        this.mensajeControlDespuesHora();
        this.hechoService.hecho.emit({ boton: index, enHora: false, el: index, hora: this.horaControl });
        // this.renderer.setStyle(card.nativeElement, 'backgroundColor', 'orange');
      }
    }
  }

  onClickHechoLimpiezaLoad(index: number, tarjeta: ITarjetaControl) {
    this.time = new Date();
    this.horaControl = this.time.getHours();
    // console.log('Hora:', this.horaControl, 'Index:', (index));
    if (tarjeta.resultado === 'limpieza') {
      // const card = this.eleCards.toArray()[index];
      // const boton = this.eleBoton.toArray()[index];
      // const botonLimpieza = this.eleBotonLimpieza.toArray()[index];
      // const imagen = this.eleImagen.toArray()[index];
      // const texto1 = this.eleTexto1.toArray()[index];
      // const texto2 = this.eleTexto2.toArray()[index];
      // const texto3 = this.eleTexto3.toArray()[index];
      // this.renderer.setStyle(boton.nativeElement, 'visibility', 'hidden');
      // this.renderer.setStyle(botonLimpieza.nativeElement, 'visibility', 'hidden');
      // this.renderer.setStyle(texto1.nativeElement, 'visibility', 'hidden');
      // this.renderer.setStyle(texto2.nativeElement, 'visibility', 'hidden');
      // this.renderer.setStyle(texto3.nativeElement, 'visibility', 'hidden');
      // this.renderer.setAttribute(imagen.nativeElement, 'src', '../assets/img/barrer.jpg');
      if (tarjeta.enHora) {
        // this.renderer.setStyle(card.nativeElement, 'backgroundColor', 'green');
        this.hechoService.hecho.emit({ boton: index, enHora: true, el: index, hora: this.horaControl });
      } else {
        this.mensajeControlDespuesHora();
        this.hechoService.hecho.emit({ boton: index, enHora: false, el: index, hora: this.horaControl });
        // this.renderer.setStyle(card.nativeElement, 'backgroundColor', 'orange');
      }
    }
  }

}
