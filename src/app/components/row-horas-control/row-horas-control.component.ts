import { Component, OnInit, Renderer2, ViewChild, ElementRef, } from '@angular/core';
import * as moment from 'moment';
import { MissionService } from '../../mission.service';
@Component({
  selector: 'app-row-horas-control',
  templateUrl: './row-horas-control.component.html',
  styleUrls: ['./row-horas-control.component.css']
  // providers: [MissionService]
})
export class RowHorasControlComponent implements OnInit {

@ViewChild('elHoraControl7', { static: false }) elHoraControl7: ElementRef;

horaControl7: string;
horaControl8: string;
horaControl9: string;

onPulsado = false;

  // constructor( private renderer: Renderer2 ) { }

  constructor(private renderer: Renderer2, public missionService: MissionService) {

    // missionService.botonPulsado$.subscribe(
    //     () => {
    //       console.log('Se ha pulsado un boton en el otro componente.............');

    //     });

  }





  ngOnInit() {
    this.missionService.change.subscribe(isOpen => {
      console.log('***************************************************************************');
      console.log(isOpen);
      console.log('cambio de estado de boton');
      this.horaControl7 = moment().format('LT');
      this.renderer.setStyle(this.elHoraControl7.nativeElement, 'backgroundColor', 'green');
      this.renderer.setStyle(this.elHoraControl7.nativeElement, 'padding', '15px');
    });
  }

  onClickHecho(numCard: number) {
    console.log(this.missionService.clickeao);
    this.missionService.botonSeHaPulsado('row-horas-control.component');
    switch (numCard) {
    case 0:
    this.horaControl7 = moment().format('LT');
    this.renderer.setStyle(this.elHoraControl7.nativeElement, 'backgroundColor', 'green');
    this.renderer.setStyle(this.elHoraControl7.nativeElement, 'padding', '15px');
    break;
  }
}


// prueba(pulsado: boolean) {
//   console.log('row-horas-control: Se ha pulsado HECHO');
//     }

}
