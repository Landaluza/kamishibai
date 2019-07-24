import { Component, OnInit } from '@angular/core';
import { ControlService } from '../../../shared/services/control.service';
import { IControl } from '../../../shared/models/control.model';
import { LocalStorageService } from 'ngx-webstorage';
import { ILineaEnvasado } from '../../../shared/models/lineaEnvasado.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.css']
})
export class ControlComponent implements OnInit {

  controles: IControl[];
  constructor(
    private controlService: ControlService,
    private localStorage: LocalStorageService,
    private router: Router
    ) { }

  ngOnInit() {
    const linea: ILineaEnvasado = this.localStorage.retrieve('lineaEnvasado');
    this.controlService.findByLinea(linea.idLineaEnvasado).subscribe(response => {
      this.controles = response.body;
      console.log(this.controles);
    });
  }

  seleccionarControl(control: IControl) {
    this.localStorage.store('control', control);
    console.log(control);
    // this.router.navigateByUrl('/controlDiario');
  }

  previousState() {
    this.localStorage.clear('lineaEnvasado');
    window.history.back();
  }
}
