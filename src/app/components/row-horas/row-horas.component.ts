import { Component, OnInit, Renderer2, ViewChildren, QueryList, ElementRef, } from '@angular/core';
import { HechoService } from '../../services/hecho.service';

@Component({
  selector: 'app-row-horas',
  templateUrl: './row-horas.component.html',
  styleUrls: ['./row-horas.component.css']
})
export class RowHorasComponent implements OnInit {
  cards = [
    { horario: '07:00 a 08:00'},
    { horario: '08:00 a 09:00'},
    { horario: '09:00 a 10:00'},
    { horario: '10:00 a 11:00'},
    { horario: '11:00 a 12:00'},
    { horario: '12:00 a 13:00'},
    { horario: '13:00 a 14:00'},
    { horario: '14:00 a 15:00'}
  ];
    @ViewChildren('hora') Hora: QueryList<ElementRef>;

  constructor(private renderer: Renderer2, public hechoService: HechoService) {
   }

  ngOnInit() {
      this.hechoService.hecho.subscribe(($Event) => {
      const hora = this.Hora.toArray()[$Event.boton];
      this.renderer.setStyle(hora.nativeElement, 'padding', '15px');

      if ($Event.enHora) {
        this.renderer.setStyle(hora.nativeElement, 'backgroundColor', 'green');
      } else {
        this.renderer.setStyle(hora.nativeElement, 'backgroundColor', 'orange');
     }
    });
   }
}


