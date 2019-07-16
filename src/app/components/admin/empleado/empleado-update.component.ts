import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Empleado } from '../../../shared/models/empleado.model';
import { EmpleadoService } from '../../../shared/services/empleado.service';

@Component({
  selector: 'app-empleado-update',
  templateUrl: './empleado-update.component.html',
  styleUrls: ['./empleado-update.component.css']
})
export class EmpleadoUpdateComponent implements OnInit {

  empleado: Empleado;
  isSaving: boolean;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private empleadoService: EmpleadoService,
  ) { }

  ngOnInit(): void {
    this.route.data.subscribe(({ empleado }) => {
      this.empleado = empleado.body ? empleado.body : empleado;
  });
   }

   save() {
    this.isSaving = true;
    if (this.empleado.idEmpleado !== null) {
        this.empleadoService.update(this.empleado).subscribe(response => this.onSaveSuccess(response), () => this.onSaveError());
    } else {
        this.empleadoService.create(this.empleado).subscribe(response => this.onSaveSuccess(response), () => this.onSaveError());
    }
}

private onSaveSuccess(result) {
  this.isSaving = false;
  this.previousState();
}

private onSaveError() {
  this.isSaving = false;
}

   previousState() {
    window.history.back();
    }
}
