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
     this.hechoService.hecho.subscribe(() => {
     this.renderer.setStyle(this.hora7.nativeElement, 'backgroundColor', 'green');
     this.renderer.setStyle(this.hora7.nativeElement, 'padding', '15px');
    });
    }

}


