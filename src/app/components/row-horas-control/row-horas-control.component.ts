import { Component, OnInit, Input } from '@angular/core';
import { ITarjetaControl } from '../../shared/models/tarjetaControl.model';

@Component({
  selector: 'app-row-horas-control',
  templateUrl: './row-horas-control.component.html',
  styleUrls: ['./row-horas-control.component.css']
})

export class RowHorasControlComponent implements OnInit {
  @Input() tarjetasControl: ITarjetaControl[];

  constructor() {
  }

  ngOnInit() {
  }

}
