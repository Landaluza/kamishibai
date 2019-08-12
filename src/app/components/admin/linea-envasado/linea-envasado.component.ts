import { Component, OnInit } from '@angular/core';
import { LineaEnvasadoService } from '../../../shared/services/lineaEnvasado.service';
import { ILineaEnvasado } from '../../../shared/models/lineaEnvasado.model';

@Component({
  selector: 'app-linea-envasado',
  templateUrl: './linea-envasado.component.html',
  styleUrls: ['./linea-envasado.component.css']
})
export class LineaEnvasadoComponent implements OnInit {

  lineaEnvasados: ILineaEnvasado[];

  constructor(
    private lineaEnvasadoService: LineaEnvasadoService
  ) { }

  ngOnInit() {
    this.lineaEnvasadoService.queryAll().subscribe(response => {
      this.lineaEnvasados = response.body;
    });
  }

  trackIdentity(index: number, item: ILineaEnvasado) {
    return item.idLineaEnvasado;
  }

}
