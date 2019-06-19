import { Component, OnInit, Renderer2, ViewChild, ElementRef, Input, OnChanges } from '@angular/core';
import * as moment from 'moment';
import { Observable } from 'rxjs/internal/Observable';
import { ConfirmacionService } from '../../services/confirmacion.service';
@Component({
  selector: 'app-row-horas-control',
  templateUrl: './row-horas-control.component.html',
  styleUrls: ['./row-horas-control.component.css']
})
export class RowHorasControlComponent implements OnInit, OnChanges {

  btnConfirm$: Observable<any>;


// @Input() leyenda: string ;

@Input() botonHechoPulsado ;

@ViewChild('elHoraControl7', { static: false }) elHoraControl7: ElementRef;

pulsado = false;
prueba = false;
horaControl7: string;
horaControl8: string;
horaControl9: string;


  constructor( 
    private renderer: Renderer2,
    private confirmacionService: ConfirmacionService
    ) {

    }

  ngOnInit() {

    this.btnConfirm$ = this.confirmacionService.getConfirmacion$();
    this.btnConfirm$.subscribe(btnConfirm => this.pulsado = btnConfirm);
    // console.log('Leyenda: ', this.leyenda);
    // console.log('botonHechoPulsado: ', this.botonHechoPulsado);
  }

  ngOnChanges(  ) {
    if (this.pulsado) {
        this.onClickHecho(0);

        }
  }

// if (this.botonHechoPulsado) {
//     console.log(this.botonHechoPulsado);
//     this.horaControl7 = moment().format('LT');
//     this.renderer.setStyle(this.elHoraControl7.nativeElement, 'backgroundColor', 'green');
//     this.renderer.setStyle(this.elHoraControl7.nativeElement, 'padding', '15px');
//   }

  onClickHecho(numCard: number) {
    switch (numCard) {
    case 0:
    this.horaControl7 = moment().format('LT');
    this.renderer.setStyle(this.elHoraControl7.nativeElement, 'backgroundColor', 'green');
    this.renderer.setStyle(this.elHoraControl7.nativeElement, 'padding', '15px');
    this.prueba = this.pulsado;
    console.log('botonHechoPulsado: ', this.botonHechoPulsado);
    break;
  }
}

}






