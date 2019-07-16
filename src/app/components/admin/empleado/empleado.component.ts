import { Component, OnInit } from '@angular/core';
import { EmpleadoService } from '../../../shared/services/empleado.service';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit {

  constructor(private empleadoService: EmpleadoService) { }

  ngOnInit() {
  }

}
