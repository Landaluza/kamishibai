import { Component, OnInit, Input, } from '@angular/core';
import { ITarjetaControl } from '../../shared/models/tarjetaControl.model';

@Component({
  selector: 'app-row-horas',
  templateUrl: './row-horas.component.html',
  styleUrls: ['./row-horas.component.css']
})
export class RowHorasComponent implements OnInit {

  @Input() tarjetasControl: ITarjetaControl[];

  constructor() {
  }

  ngOnInit() {
  }
}


