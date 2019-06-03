import {
  Component,
  Renderer2,
  AfterViewInit,
  ViewChild,
  ElementRef
} from '@angular/core';

export interface Tile {
  cols: number;
  rows: number;
  text: string;
  border: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('overlay0', { static: false }) card0: ElementRef;
  @ViewChild('overlay1', { static: false }) card1: ElementRef;
  @ViewChild('hora7', { static: false }) hora7: ElementRef;
  @ViewChild('hora8', { static: false }) hora8: ElementRef;


  constructor(private renderer: Renderer2) {}

  tiles = [
    { text: '7:00 a 8:00', cols: 1, rows: 1, color: '#ADD8E6' },
    { text: '8:00 a 9:00', cols: 1, rows: 1, color: '#ADD8E6' },
    { text: '9:00 a 10:00', cols: 1, rows: 1, color: '#ADD8E6' },
    { text: '10:00 a 11:00', cols: 1, rows: 1, color: '#ADD8E6' },
    { text: '11:00 a 12:00', cols: 1, rows: 1, color: '#ADD8E6' },
    { text: '12:00 a 13:00', cols: 1, rows: 1, color: '#ADD8E6' },
    { text: '13:00 a 14:00', cols: 1, rows: 1, color: '#ADD8E6' },
    { text: '14:00 a 15:00', cols: 1, rows: 1, color: '#ADD8E6' }
  ];

  tilesFooter = [
    { text: '1', cols: 1, rows: 1, color: '#ADD8E6' },
    { text: '2', cols: 1, rows: 1, color: '#ADD8E6' },
    { text: '3', cols: 1, rows: 1, color: '#ADD8E6' },
    { text: '4', cols: 1, rows: 1, color: '#ADD8E6' },
    { text: '5', cols: 1, rows: 1, color: '#ADD8E6' },
    { text: '6', cols: 1, rows: 1, color: '#ADD8E6' },
    { text: '7', cols: 1, rows: 1, color: '#ADD8E6' },
    { text: '8', cols: 1, rows: 1, color: '#ADD8E6' }
  ];
  title = 'kamizibai';

  onClickHecho(numCard: number) {
    switch (numCard) {
      case 0:
        this.renderer.setStyle(this.card0.nativeElement, 'backgroundColor', 'green');
        console.log(this.hora7);
        this.renderer.setStyle(this.hora7.nativeElement, 'backgroundColor', 'green');
        break;
      case 1:
        this.renderer.setStyle(this.card1.nativeElement,'backgroundColor', 'green');
        this.renderer.setStyle(this.hora8.nativeElement, 'backgroundColor', 'green');
        break;
    }
  }
}
