import { Component, OnInit, Inject } from '@angular/core';
import { TurnoService } from '../../../shared/services/turno.service';
import { ITurno } from '../../../shared/models/turno.model';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-turno',
  templateUrl: './turno.component.html',
  styleUrls: ['./turno.component.css']
})
export class TurnoComponent implements OnInit {

  turnos: ITurno[];

  constructor(
    private turnoService: TurnoService,
    public dialog: MatDialog
    ) { }

  ngOnInit() {
    this.loadAll();
  }

  loadAll() {
    this.turnoService.queryAll().subscribe(response => {
      this.turnos = response.body;
    });
  }

  trackIdentity(index: number, item: ITurno) {
    return item.idtTurno;
  }

  deleteTurno(turno: ITurno): void {
    console.log(turno);
    const dialogRef = this.dialog.open(TurnoDeleteComponent, {
      width: '50%',
      data: {
        idtTurno: turno.idtTurno,
        nombreTurno: turno.nombreTurno
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.loadAll();
    });
  }

}

@Component({
  selector: 'app-turno-delete',
  templateUrl: './turno-delete.component.html'
})
export class TurnoDeleteComponent implements OnInit {

  constructor(
    private turnoService: TurnoService,
    public dialogRef: MatDialogRef<TurnoDeleteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ITurno
  ) { }

  ngOnInit() {
    console.log(this.data);
  }

  onNoClick(): void {
    this.turnoService.delete(this.data.idtTurno).subscribe(response => {
      console.log('turno deleted');
    });
    this.dialogRef.close();
  }
}
