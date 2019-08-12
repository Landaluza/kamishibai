import { Component, OnInit, Inject } from '@angular/core';
import { EmpleadoService } from '../../../shared/services/empleado.service';
import { IEmpleado } from '../../../shared/models/empleado.model';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit {
  empleados: IEmpleado[];
  constructor(
    private empleadoService: EmpleadoService,
    public dialog: MatDialog
    ) { }

  ngOnInit() {
    this.loadAll();
  }

  loadAll() {
    this.empleadoService.queryAll().subscribe(resp => {
      this.empleados = resp.body;
    });
  }

  trackIdentity(index: number, item: IEmpleado) {
    return item.idEmpleado;
  }

  deleteEmpleado(empleado: IEmpleado): void {
    console.log(empleado);
    const dialogRef = this.dialog.open(EmpleadoDeleteComponent, {
      width: '50%',
      data: {
        nombre: empleado.nombre,
        idEmpleado: empleado.idEmpleado
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
      this.loadAll();
    });
  }

}


@Component({
  selector: 'app-empleado-delete',
  templateUrl: './empleado-delete.component.html'
})
export class EmpleadoDeleteComponent implements OnInit{

  constructor(
    private empleadoService: EmpleadoService,
    public dialogRef: MatDialogRef<EmpleadoDeleteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IEmpleado
  ) { }

  ngOnInit() {
    console.log(this.data);
  }

  onNoClick(): void {
    this.empleadoService.delete(this.data.idEmpleado).subscribe(response => {
      console.log('empleado deleted');
    });
    this.dialogRef.close();
  }
}