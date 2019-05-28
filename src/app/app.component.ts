import { Component } from '@angular/core';

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

   tiles = [
    {text: 'Información', cols: 1, rows: 1, color: '#F2F2F2'},
    {text: '7:00 a 8:00', cols: 1, rows: 1, color: '#ADD8E6'},
    {text: '8:00 a 9:00', cols: 1, rows: 1, color: '#ADD8E6'},
    {text: '9:00 a 10:00', cols: 1, rows: 1, color: '#ADD8E6'},
    {text: '10:00 a 11:00', cols: 1, rows: 1, color: '#ADD8E6'},
    {text: '11:00 a 12:00', cols: 1, rows: 1, color: '#ADD8E6'},
    {text: '12:00 a 13:00', cols: 1, rows: 1, color: '#ADD8E6'},
    {text: '13:00 a 14:00', cols: 1, rows: 1, color: '#ADD8E6'},
    {text: '14:00 a 15:00', cols: 1, rows: 1, color: '#ADD8E6'},

  ];

  tilesFooter = [
    {text: 'Resumen', cols: 1, rows: 1, color: '#F2F2F2'},
    {text: '1', cols: 1, rows: 1, color: '#ADD8E6'},
    {text: '1', cols: 1, rows: 1, color: '#ADD8E6'},
    {text: '3', cols: 1, rows: 1, color: '#ADD8E6'},
    {text: '30', cols: 1, rows: 1, color: '#ADD8E6'},
    {text: '30', cols: 1, rows: 1, color: '#ADD8E6'},
    {text: '30', cols: 1, rows: 1, color: '#ADD8E6'},
    {text: '30', cols: 1, rows: 1, color: '#ADD8E6'},
    {text: '30', cols: 1, rows: 1, color: '#ADD8E6'},

  ];
  title = 'kamizibai';
}
