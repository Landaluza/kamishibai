import { Component, OnInit, Renderer2, ViewChildren, QueryList, ElementRef, } from '@angular/core';
import * as moment from 'moment';
import { HechoService } from '../../services/hecho.service';
@Component({
  selector: 'app-row-horas-control',
  templateUrl: './row-horas-control.component.html',
  styleUrls: ['./row-horas-control.component.css']
})

export class RowHorasControlComponent implements OnInit {

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

@ViewChildren('eleHoraControl') eleHoraControl: QueryList<ElementRef>;

  constructor(private renderer: Renderer2, public hechoService: HechoService) {
  }

  ngOnInit() {
    // TODO:  Da error si asigno type Object a $Event.
        this.hechoService.hecho.subscribe(($Event) => {
        const horaControl = this.eleHoraControl.toArray()[$Event.boton];

        if ($Event.enHora) {
           this.renderer.setStyle(horaControl.nativeElement, 'backgroundColor', 'green');
        } else {
           this.renderer.setStyle(horaControl.nativeElement, 'backgroundColor', 'orange');
        }

        const div = this.renderer.createElement('div');
        const text = this.renderer.createText(moment().format('LT'));
        this.renderer.appendChild(div, text);
        this.renderer.appendChild(horaControl.nativeElement, div);
        this.renderer.setStyle(horaControl.nativeElement, 'padding', '15px');
    });
  }

}
