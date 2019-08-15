import { Component, OnInit, Inject } from '@angular/core';
import { TarjetaControlService } from 'src/app/shared/services/tarjetaControl.service';
import { ITarjetaControl } from '../../../shared/models/tarjetaControl.model';
import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material';

@Component({
  selector: 'app-tarjeta-control',
  templateUrl: './tarjeta-control.component.html',
  styleUrls: ['./tarjeta-control.component.css']
})
export class TarjetaControlComponent implements OnInit {

  tarjetas: ITarjetaControl[];

  constructor(
    private tarjetaControlService: TarjetaControlService,
    public dialog: MatDialog
    ) { }

  ngOnInit() {
    this.loadAll();
  }

  loadAll() {
    this.tarjetaControlService.queryAll().subscribe(response => {
      this.tarjetas = response.body;
    });
  }

  trackIdentity(index: number, item: ITarjetaControl) {
    return item.idTarjetaControl;
  }

  deleteTarjetaControl(tarjetaControl: ITarjetaControl): void {
    console.log(tarjetaControl);
    const dialogRef = this.dialog.open(TarjetaControlDeleteComponent, {
      width: '50%',
      data: {
        idTarjetaControl: tarjetaControl.idTarjetaControl
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.loadAll();
    });
  }

}

@Component({
  selector: 'app-tarjeta-control-delete',
  templateUrl: './tarjeta-control-delete.component.html'
})
export class TarjetaControlDeleteComponent implements OnInit {

  constructor(
    private tarjetaControlService: TarjetaControlService,
    public dialogRef: MatDialogRef<TarjetaControlDeleteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ITarjetaControl
  ) { }

  ngOnInit() {
    console.log(this.data);
  }

  onNoClick(): void {
    this.tarjetaControlService.delete(this.data.idTarjetaControl).subscribe(response => {
      console.log('tarjeta control deleted');
    });
    this.dialogRef.close();
  }
}
