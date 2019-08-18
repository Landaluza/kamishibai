import {
  Component,
  ElementRef,
  OnInit,
  ViewChildren,
  QueryList,
} from '@angular/core';

import * as moment from 'moment';
import Swal from 'sweetalert2';
import { HechoService } from '../../services/hecho.service';
import { LocalStorageService } from 'ngx-webstorage';
import { ITarjetaControl } from '../../shared/models/tarjetaControl.model';
import { TarjetaControlService } from '../../shared/services/tarjetaControl.service';
import { IControlDiario } from '../../shared/models/controlDiario.model';
import { EventEmitter, Output } from '@angular/core';
import { IControl } from '../../shared/models/control.model';

@Component({
  selector: 'app-row-cards',
  templateUrl: './row-cards.component.html',
  styleUrls: ['./row-cards.component.css']
})

export class RowCardsComponent implements OnInit {
  tarjetasControl: ITarjetaControl[];
  control: IControl;

  @Output() tarjetasControlEvent = new EventEmitter<ITarjetaControl[]>();

  // cards = [
  //   { id: 7 },
  //   { id: 8 },
  //   { id: 9 },
  //   { id: 10 },
  //   { id: 11 },
  //   { id: 12 },
  //   { id: 13 },
  //   { id: 14 }
  // ];

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
    private hechoService: HechoService,
    private localStorageService: LocalStorageService,
    private localStorage: LocalStorageService,
    private tarjetaControlService: TarjetaControlService
  ) { }

  ngOnInit() {
    this.control = this.localStorageService.retrieve('control');
    this.loadAll();
    // setInterval(this.concienciacion, 30000);
  }

  loadAll() {
    const controlDiarioExist: IControlDiario = this.localStorage.retrieve('controlDiario');
    this.tarjetaControlService.queryAllByControlDiario(controlDiarioExist.idControlDiario).subscribe(response => {
      this.tarjetasControl = [];
      this.tarjetasControl = response.body;
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

    if (this.horaControl < tarjeta.horaDesde) {
      this.mensajeControlAntesHora();
    } else {
      const endTime = moment(tarjeta.horaDesde + ':59', 'hh:mm');
      const nowTime = moment(this.time.getHours() + ':' + this.time.getMinutes()  , 'hh:mm');

      if (nowTime <= endTime) {
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
        // console.log('ok');
        this.loadAll();
      });
    }
  }

  onClickHechoLimpieza(index: number, tarjeta: ITarjetaControl) {
    this.time = new Date();
    this.horaControl = this.time.getHours();

    if (this.horaControl < tarjeta.horaDesde) {
      this.mensajeControlAntesHora();
    } else {
      const endTime = moment(tarjeta.horaDesde + ':59', 'hh:mm');
      const nowTime = moment(this.time.getHours() + ':' + this.time.getMinutes()  , 'hh:mm');
      if (nowTime <= endTime) {
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
        // console.log('ok');
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
        this.hechoService.hecho.emit({ boton: index, enHora: false, el: index, hora: this.horaControl });
      }
    }
  }
}
