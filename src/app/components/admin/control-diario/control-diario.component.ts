import { Component, OnInit, Inject } from '@angular/core';
import { IControlDiario } from '../../../shared/models/controlDiario.model';
import { ControlDiarioService } from 'src/app/shared/services/controlDiario.service';
import { MatDialogRef, MatDialog } from '@angular/material';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-control-diario',
  templateUrl: './control-diario.component.html',
  styleUrls: ['./control-diario.component.css']
})
export class ControlDiarioComponent implements OnInit {

  controlesDiarios: IControlDiario[];
  constructor(
    private controlDiarioService: ControlDiarioService,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.loadAll();
  }

  loadAll() {
    this.controlDiarioService.queryAll().subscribe(response => {
      this.controlesDiarios = response.body;
    });
  }

  trackIdentity(index: number, item: IControlDiario) {
    return item.idControlDiario;
  }

  deleteControlDiario(control: IControlDiario): void {
    console.log(control);
    const dialogRef = this.dialog.open(ControlDiarioDeleteComponent, {
      width: '50%',
      data: {
        nombre: control.idControlDiario,
        idControlDiario: control.idControlDiario
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
  selector: 'app-control-diario-delete',
  templateUrl: './control-diario-delete.component.html'
})
export class ControlDiarioDeleteComponent implements OnInit{

  constructor(
    private controlDiarioService: ControlDiarioService,
    public dialogRef: MatDialogRef<ControlDiarioDeleteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IControlDiario
  ) { }

  ngOnInit() {
    console.log(this.data);
  }

  onNoClick(): void {
    this.controlDiarioService.delete(this.data.idControlDiario).subscribe(response => {
      console.log('control diario deleted');
    });
    this.dialogRef.close();
  }
}