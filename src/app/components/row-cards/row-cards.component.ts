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

  horaControl8: string;
  horaControl9: string;

  fecha = new Date();
  //  fecha1 = '2019.01.23';

  constructor(
    private renderer: Renderer2,
    private hechoService: HechoService
  ) {}

  ngOnInit() {
    // this.missionService.change.subscribe(isOpen => {});
    // this.missionService.change.subscribe(() => {});
  }

  onClickHecho(numCard: number) {
    // this.missionService.toggle();
    this.hechoService.hecho.emit();

    switch (numCard) {
      case 0:
        // Se usa para ocultar el boton.
        this.verBoton7 = false;

        if (this.horaControl7 >= 8) {
          this.mensajeControlFueraHora();
          this.renderer.setStyle(this.card7.nativeElement, 'backgroundColor', 'orange' );
        } else {
          this.renderer.setStyle( this.card7.nativeElement, 'backgroundColor', 'green' );
        }
        break;

      case 1:
        this.renderer.setStyle( this.card8.nativeElement, 'backgroundColor', 'green' );
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
}
