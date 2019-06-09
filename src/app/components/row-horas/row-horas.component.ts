import { Component, OnInit, Renderer2, ViewChild, ElementRef, } from '@angular/core';

@Component({
  selector: 'app-row-horas',
  templateUrl: './row-horas.component.html',
  styleUrls: ['./row-horas.component.css']
})
export class RowHorasComponent implements OnInit {

  @ViewChild('hora7', { static: false }) hora7: ElementRef;
  // @ViewChild('elHoraControl7', { static: false }) elHoraControl7: ElementRef;
  @ViewChild('hora8', { static: false }) hora8: ElementRef;
  // @ViewChild('elHoraControl8', { static: false }) elHoraControl8: ElementRef;
  @ViewChild('hora9', { static: false }) hora9: ElementRef;
  // @ViewChild('elHoraControl9', { static: false }) elHoraControl9: ElementRef;


  constructor(private renderer: Renderer2) {
   }

  ngOnInit() {
  }

  seHaPulsadoHecho() {
   console.log('Se ha pulsado hecho');
   this.renderer.setStyle(this.hora7.nativeElement, 'backgroundColor', 'orange');
   this.renderer.setStyle(this.hora7.nativeElement, 'padding', '15px');
  //  this.renderer.setStyle(this.elHoraControl7.nativeElement, 'backgroundColor', 'orange');
  //  this.renderer.setStyle(this.elHoraControl7.nativeElement, 'padding', '15px');
  //  this.renderer.setStyle(this.hora7.nativeElement, 'backgroundColor', 'green');
  //  this.renderer.setStyle(this.hora7.nativeElement, 'padding', '15px');
  //  this.renderer.setStyle(this.elHoraControl7.nativeElement, 'backgroundColor', 'green');
  //  this.renderer.setStyle(this.elHoraControl7.nativeElement, 'padding', '15px');
  }



}


