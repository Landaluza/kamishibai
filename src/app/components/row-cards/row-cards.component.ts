import {
  Component,
  Renderer2,
  ViewChild,
  ElementRef,
  OnInit
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
  public horaControl8 = this.time.getHours();
  public horaControl9 = this.time.getHours();

  fecha = new Date();
  //  fecha1 = '2019.01.23';

  constructor(
    private renderer: Renderer2,
    private hechoService: HechoService
  ) {}

  ngOnInit() {
  }

  onClickHecho(numCard: number) {
    switch (numCard) {
      case 7:
        if ( this.horaControl7 < 20 ) {
          this.mensajeControlAntesHora();
          break;
        } else {
           this.hechoService.hecho7.emit(true);
        // Se usa para ocultar el boton.
           this.verBoton7 = false;
           if (this.horaControl7 >= 8) {
            this.hechoService.hecho7.emit(false);
            this.mensajeControlDespuesHora();
            this.renderer.setStyle(this.card7.nativeElement, 'backgroundColor', 'orange' );
          } else {
            this.hechoService.hecho7.emit(true);
            this.renderer.setStyle( this.card7.nativeElement, 'backgroundColor', 'green' );
          }
           }
        break;

      case 8:
        this.verBoton8 = false;
        if (this.horaControl8 >= 9) {
          this.hechoService.hecho8.emit(false);
          this.mensajeControlDespuesHora();
          this.renderer.setStyle(this.card8.nativeElement, 'backgroundColor', 'orange' );
        } else {
          this.hechoService.hecho8.emit(true);
          this.renderer.setStyle( this.card8.nativeElement, 'backgroundColor', 'green' );
        }
        break;

        case 9:
        this.verBoton9 = false;
        if (this.horaControl9 >= 10) {
          this.hechoService.hecho9.emit(false);
          this.mensajeControlDespuesHora();
          this.renderer.setStyle(this.card9.nativeElement, 'backgroundColor', 'orange' );
        } else {
          this.hechoService.hecho9.emit(true);
          this.renderer.setStyle( this.card9.nativeElement, 'backgroundColor', 'green' );
        }
        break;

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
      imageUrl: '../assets/img/alerta.jpg',
      imageWidth: 400,
      imageHeight: 400,
      imageAlt: 'Imagen',
      animation: true
    });
  }

}
