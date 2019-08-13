import { Component, OnInit, Inject } from '@angular/core';
import { ControlService } from '../../../shared/services/control.service';
import { IControl } from '../../../shared/models/control.model';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.css']
})
export class ControlComponent implements OnInit {

  controles: IControl[];

  constructor(
    private controlService: ControlService,
    public dialog: MatDialog
    ) { }

  ngOnInit() {
    this.loadAll();
  }

  loadAll() {
    this.controlService.queryAll().subscribe(response => {
      this.controles = response.body;
    });
  }

  trackIdentity(index: number, item: IControl) {
    return item.idControl;
  }

  deleteControl(control: IControl): void {
    console.log(control);
    const dialogRef = this.dialog.open(ControlDeleteComponent, {
      width: '50%',
      data: {
        nombre: control.controlNombre,
        idControl: control.idControl
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
  selector: 'app-control-delete',
  templateUrl: './control-delete.component.html'
})
export class ControlDeleteComponent implements OnInit{

  constructor(
    private controlService: ControlService,
    public dialogRef: MatDialogRef<ControlDeleteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IControl
  ) { }

  ngOnInit() {
    console.log(this.data);
  }

  onNoClick(): void {
    this.controlService.delete(this.data.idControl).subscribe(response => {
      console.log('control deleted');
    });
    this.dialogRef.close();
  }
}