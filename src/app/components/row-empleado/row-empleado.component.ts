import { Component, OnInit } from '@angular/core';
import { now } from 'moment';

@Component({
  selector: 'app-row-empleado',
  templateUrl: './row-empleado.component.html',
  styleUrls: ['./row-empleado.component.css']
})
export class RowEmpleadoComponent implements OnInit {
  fecha = now();
  version = '0.0.2';

  constructor() { }

  ngOnInit() {
  }

}
