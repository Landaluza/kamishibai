import { Component, OnInit } from '@angular/core';
import { TurnoService } from '../../../shared/services/turno.service';
import { ITurno } from '../../../shared/models/turno.model';

@Component({
  selector: 'app-turno',
  templateUrl: './turno.component.html',
  styleUrls: ['./turno.component.css']
})
export class TurnoComponent implements OnInit {

  turnos: ITurno[];

  constructor(private turnoService: TurnoService) { }

  ngOnInit() {
    this.turnoService.queryAll().subscribe(response => {
      this.turnos = response.body;
    });
  }

}
