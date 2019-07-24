import { Component, OnInit } from '@angular/core';
import { LineaEnvasadoService } from '../../../shared/services/lineaEnvasado.service';
import { ILineaEnvasado, LineaEnvasado } from '../../../shared/models/lineaEnvasado.model';
import { LocalStorageService } from 'ngx-webstorage';

@Component({
  selector: 'app-linea',
  templateUrl: './linea.component.html',
  styleUrls: ['./linea.component.css']
})
export class LineaComponent implements OnInit {

  lineas: ILineaEnvasado[];
  constructor(
    private lineaEnvasadoService: LineaEnvasadoService,
    private localStorage: LocalStorageService
    ) { }

  ngOnInit() {
    this.lineaEnvasadoService.queryAll().subscribe(response => {
      this.lineas = response.body;
    });
  }

  seleccionarLinea(lineaEnvasado: LineaEnvasado) {
    console.log(lineaEnvasado);
    this.localStorage.store('lineaEnvasado', lineaEnvasado);
  }
}
