import { Component, OnInit } from '@angular/core';
import { EmpleadoService } from '../../../shared/services/empleado.service';
import { IEmpleado } from '../../../shared/models/empleado.model';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit {
  empleados: IEmpleado[];
  constructor(private empleadoService: EmpleadoService) { }

  ngOnInit() {
    this.empleadoService.queryAll().subscribe(resp => {
      console.log(resp.body);
      this.empleados = resp.body;
    });
  }

}
