import { Component, OnInit, Renderer2, ViewChild, ElementRef, } from '@angular/core';
import * as moment from 'moment';
import { MissionService } from '../../mission.service';
@Component({
  selector: 'app-row-horas-control',
  templateUrl: './row-horas-control.component.html',
  styleUrls: ['./row-horas-control.component.css']
})
export class RowHorasControlComponent implements OnInit {

@ViewChild('elHoraControl7', { static: false }) elHoraControl7: ElementRef;

horaControl7: string;
horaControl8: string;
horaControl9: string;

  constructor(private renderer: Renderer2, public missionService: MissionService) {
  }

  ngOnInit() {
    this.missionService.change.subscribe(isOpen => {
      this.horaControl7 = moment().format('LT');
      this.renderer.setStyle(this.elHoraControl7.nativeElement, 'backgroundColor', 'green');
      this.renderer.setStyle(this.elHoraControl7.nativeElement, 'padding', '15px');
    });
  }

}


