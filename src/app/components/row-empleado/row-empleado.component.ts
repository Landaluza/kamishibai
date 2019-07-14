import { Component, OnInit } from '@angular/core';
import { now } from 'moment';
import { RowEmpleadoService } from '../../shared/services/row-empleado.service';
@Component({
  selector: 'app-row-empleado',
  templateUrl: './row-empleado.component.html',
  styleUrls: ['./row-empleado.component.css']
})
export class RowEmpleadoComponent implements OnInit {
  fecha = now();
  fechaCompleta = new Date();
  version = '0.0.2';

  constructor(private empleadoService: RowEmpleadoService) { }

  ngOnInit() {
    this.empleadoService.queryAll().subscribe(result => {
      console.log(result.body);
    });
  }

}
