import { Component, OnInit } from '@angular/core';
import { LineaEnvasadoService } from '../../../shared/services/lineaEnvasado.service';
import { ILineaEnvasado, LineaEnvasado } from '../../../shared/models/lineaEnvasado.model';
import { LocalStorageService } from 'ngx-webstorage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-linea',
  templateUrl: './linea.component.html',
  styleUrls: ['./linea.component.css']
})
export class LineaComponent implements OnInit {

  lineas: ILineaEnvasado[];
  constructor(
    private lineaEnvasadoService: LineaEnvasadoService,
    private localStorage: LocalStorageService,
    private router: Router
    ) { }

  ngOnInit() {
    const controlDiarioExist = this.localStorage.retrieve('controlDiario');
    if (controlDiarioExist) {
      this.router.navigate(['/home']);
    }
    this.lineaEnvasadoService.queryAll().subscribe(response => {
      this.lineas = response.body;
    });
  }

  seleccionarLinea(lineaEnvasado: LineaEnvasado) {
    this.localStorage.store('lineaEnvasado', lineaEnvasado);
    this.router.navigateByUrl('/control');
  }
}
