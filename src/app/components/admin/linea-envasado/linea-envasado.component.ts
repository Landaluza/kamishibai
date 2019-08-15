import { Component, OnInit, Inject } from '@angular/core';
import { LineaEnvasadoService } from '../../../shared/services/lineaEnvasado.service';
import { ILineaEnvasado } from '../../../shared/models/lineaEnvasado.model';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-linea-envasado',
  templateUrl: './linea-envasado.component.html',
  styleUrls: ['./linea-envasado.component.css']
})
export class LineaEnvasadoComponent implements OnInit {

  lineaEnvasados: ILineaEnvasado[];

  constructor(
    private lineaEnvasadoService: LineaEnvasadoService,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.loadAll();
  }

  loadAll() {
    // console.log('entro a cargar las lineas');
    this.lineaEnvasadoService.queryAll().subscribe(response => {
      // console.log('carga');
      this.lineaEnvasados = response.body;
    });
  }

  trackIdentity(index: number, item: ILineaEnvasado) {
    return item.idLineaEnvasado;
  }

    deleteLineaEnvasado(lineaEnvasado: ILineaEnvasado): void {
    console.log(lineaEnvasado);
    const dialogRef = this.dialog.open(LineaEnvasadoDeleteComponent, {
      width: '50%',
      data: {
        nombre: lineaEnvasado.descripcion,
        idLineaEnvasado: lineaEnvasado.idLineaEnvasado
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.loadAll();
    });
  }
}

@Component({
  selector: 'app-linea-envasado-delete',
  templateUrl: './linea-envasado-delete.component.html'
})
export class LineaEnvasadoDeleteComponent implements OnInit {
  constructor(
    private lineaEnvasadoService: LineaEnvasadoService,
    public dialogRef: MatDialogRef<LineaEnvasadoDeleteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ILineaEnvasado
  ) { }

  ngOnInit() {
    console.log(this.data);
  }

  onClick(): void {
    this.lineaEnvasadoService.delete(this.data.idLineaEnvasado).subscribe(response => {
      console.log('linea deleted');
    });
    this.dialogRef.close();
  }
}
