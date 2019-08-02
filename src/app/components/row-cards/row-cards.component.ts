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
import { EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-row-cards',
  templateUrl: './row-cards.component.html',
  styleUrls: ['./row-cards.component.css']
})

export class RowCardsComponent implements OnInit {
  tarjetasControl: ITarjetaControl[];

  @Output() tarjetasControlEvent = new EventEmitter<ITarjetaControl[]>();

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

  time: Date;

  horaControl: number;
  fecha = new Date();

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
    this.loadAll();
  }

  loadAll() {
    const controlDiarioExist: IControlDiario = this.localStorage.retrieve('controlDiario');
    this.tarjetaControlService.queryAllByControlDiario(controlDiarioExist.idControlDiario).subscribe(response => {
      this.tarjetasControl = [];
      this.tarjetasControl = response.body;
      console.log(this.tarjetasControl);
      this.tarjetasControlEvent.emit(this.tarjetasControl);
      if (this.tarjetasControl.length > 0) {
        this.tarjetasControl.forEach((element, index) => {
          this.onClickHechoLoad(index, element);
          this.onClickHechoLimpiezaLoad(index, element);
        });
      }
    });
  }

  onClickHecho(index: number, tarjeta: ITarjetaControl) {
    this.time = new Date();
    this.horaControl = this.time.getHours();
    console.log(tarjeta);
    console.log(this.horaControl);
    console.log(tarjeta.horaHasta);
    if (this.horaControl > tarjeta.horaHasta || this.horaControl < tarjeta.horaDesde) {
      this.mensajeControlAntesHora();
    } else {
      console.log(this.horaControl);
      console.log(tarjeta.horaHasta);
      if (this.horaControl <= tarjeta.horaHasta) {
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

    console.log(this.horaControl);
    console.log(tarjeta.horaHasta);
    console.log(tarjeta.horaDesde);
    if (this.horaControl > tarjeta.horaHasta || this.horaControl < tarjeta.horaDesde) {
      this.mensajeControlAntesHora();
    } else {

      if (this.horaControl <= tarjeta.horaHasta) {
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

      if (tarjeta.enHora) {
        this.hechoService.hecho.emit({ boton: index, enHora: true, el: index, hora: this.horaControl });
      } else {
        this.mensajeControlDespuesHora();
        this.hechoService.hecho.emit({ boton: index, enHora: false, el: index, hora: this.horaControl });
      }
    }
  }

  onClickHechoLimpiezaLoad(index: number, tarjeta: ITarjetaControl) {
    this.time = new Date();
    this.horaControl = this.time.getHours();
    if (tarjeta.resultado === 'limpieza') {
      if (tarjeta.enHora) {
        this.hechoService.hecho.emit({ boton: index, enHora: true, el: index, hora: this.horaControl });
      } else {
        this.mensajeControlDespuesHora();
        this.hechoService.hecho.emit({ boton: index, enHora: false, el: index, hora: this.horaControl });
      }
    }
  }

  

}
