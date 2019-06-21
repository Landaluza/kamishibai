import { Component, OnInit, Renderer2, ViewChild, ElementRef, } from '@angular/core';
import { HechoService } from '../../services/hecho.service';

@Component({
  selector: 'app-row-horas',
  templateUrl: './row-horas.component.html',
  styleUrls: ['./row-horas.component.css']
})
export class RowHorasComponent implements OnInit {

  @ViewChild('hora7', { static: false }) hora7: ElementRef;
  @ViewChild('hora8', { static: false }) hora8: ElementRef;
  @ViewChild('hora9', { static: false }) hora9: ElementRef;

  constructor(private renderer: Renderer2, public hechoService: HechoService) {
   }

  ngOnInit() {
     this.hechoService.hecho7.subscribe(($Event: boolean) => {
      if ($Event) {
        this.renderer.setStyle(this.hora7.nativeElement, 'backgroundColor', 'green');
      } else {
        this.renderer.setStyle(this.hora7.nativeElement, 'backgroundColor', 'orange');
     }
      this.renderer.setStyle(this.hora7.nativeElement, 'padding', '15px');
    });

     this.hechoService.hecho8.subscribe(($Event: boolean) => {
      if ($Event) {
        this.renderer.setStyle(this.hora8.nativeElement, 'backgroundColor', 'green');
      } else {
        this.renderer.setStyle(this.hora8.nativeElement, 'backgroundColor', 'orange');
     }
      this.renderer.setStyle(this.hora8.nativeElement, 'padding', '15px');
       });

     this.hechoService.hecho9.subscribe(($Event: boolean) => {
      if ($Event) {
        this.renderer.setStyle(this.hora9.nativeElement, 'backgroundColor', 'green');
      } else {
        this.renderer.setStyle(this.hora9.nativeElement, 'backgroundColor', 'orange');
     }
      this.renderer.setStyle(this.hora9.nativeElement, 'padding', '15px');
      });

     const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
     for (const card of cards) {
          console.log(`hecho${card}`, `hora${card}`);
      }




    }

}


