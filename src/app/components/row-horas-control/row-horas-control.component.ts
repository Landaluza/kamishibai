import { Component, OnInit, Renderer2, ViewChild, ElementRef, } from '@angular/core';
import * as moment from 'moment';
import { HechoService } from '../../services/hecho.service';
@Component({
  selector: 'app-row-horas-control',
  templateUrl: './row-horas-control.component.html',
  styleUrls: ['./row-horas-control.component.css']
})
export class RowHorasControlComponent implements OnInit {

@ViewChild('elHoraControl7', { static: false }) elHoraControl7: ElementRef;
@ViewChild('elHoraControl8', { static: false }) elHoraControl8: ElementRef;
@ViewChild('elHoraControl9', { static: false }) elHoraControl9: ElementRef;

horaControl7: string;
horaControl8: string;
horaControl9: string;

  constructor(private renderer: Renderer2, public hechoService: HechoService) {
  }

  ngOnInit() {
    // TODO: Parece que no es necesario pasar IsOpen.
    // this.missionService.change.subscribe(isOpen => {
      this.hechoService.hecho7.subscribe(() => {
      this.horaControl7 = moment().format('LT');
      this.renderer.setStyle(this.elHoraControl7.nativeElement, 'backgroundColor', 'green');
      this.renderer.setStyle(this.elHoraControl7.nativeElement, 'padding', '15px');
    });

      this.hechoService.hecho8.subscribe(() => {
      this.horaControl8 = moment().format('LT');
      this.renderer.setStyle(this.elHoraControl8.nativeElement, 'backgroundColor', 'green');
      this.renderer.setStyle(this.elHoraControl8.nativeElement, 'padding', '15px');
    });

      this.hechoService.hecho9.subscribe(() => {
      this.horaControl9 = moment().format('LT');
      this.renderer.setStyle(this.elHoraControl9.nativeElement, 'backgroundColor', 'green');
      this.renderer.setStyle(this.elHoraControl9.nativeElement, 'padding', '15px');
    });
  }

}


