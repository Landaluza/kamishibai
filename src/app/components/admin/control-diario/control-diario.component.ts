import { Component, OnInit } from '@angular/core';
import { IControlDiario } from '../../../shared/models/controlDiario.model';
import { ControlDiarioService } from 'src/app/shared/services/controlDiario.service';

@Component({
  selector: 'app-control-diario',
  templateUrl: './control-diario.component.html',
  styleUrls: ['./control-diario.component.css']
})
export class ControlDiarioComponent implements OnInit {

  controlesDiarios: IControlDiario[];
  constructor(
    private controlDiarioService: ControlDiarioService
  ) { }

  ngOnInit() {
    this.controlDiarioService.queryAll().subscribe(response => {
      this.controlesDiarios = response.body;
    });
  }

}
