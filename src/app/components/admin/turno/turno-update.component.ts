import { Component, OnInit } from '@angular/core';
import { TurnoService } from '../../../shared/services/turno.service';
import { ITurno } from '../../../shared/models/turno.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-turno-update',
  templateUrl: './turno-update.component.html',
  styleUrls: ['./turno-update.component.css']
})
export class TurnoUpdateComponent implements OnInit {

  turno: ITurno;
  isSaving: boolean;

  constructor(
    private turnoService: TurnoService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.data.subscribe(({ turno }) => {
      this.turno = turno;
    });
  }

  save() {
    this.isSaving = true;
    if (this.turno.idtTurno) {
      this.turnoService
        .update(this.turno)
        .subscribe((response) => this.onSaveSuccess(response), () => this.onSaveError());
    } else {
      this.turnoService
        .create(this.turno)
        .subscribe((response) => this.onSaveSuccess(response), () => this.onSaveError());
    }
  }

  private onSaveSuccess(result) {
    this.isSaving = false;
    this.previousState();
  }

  private onSaveError() {
    this.isSaving = false;
  }

  previousState() {
    window.history.back();
  }

}
