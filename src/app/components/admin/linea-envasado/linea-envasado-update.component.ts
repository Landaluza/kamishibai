import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LineaEnvasadoService } from '../../../shared/services/lineaEnvasado.service';
import { LineaEnvasado, ILineaEnvasado } from '../../../shared/models/lineaEnvasado.model';

@Component({
  selector: 'app-linea-envasado-update',
  templateUrl: './linea-envasado-update.component.html',
  styleUrls: ['./linea-envasado-update.component.css']
})
export class LineaEnvasadoUpdateComponent implements OnInit {

  lineaEnvasado: ILineaEnvasado;
  isSaving: boolean;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private lineaEnvasadoService: LineaEnvasadoService
    ) { }

  ngOnInit(): void {
    this.route.data.subscribe(({ lineaEnvasado }) => {
      this.lineaEnvasado = lineaEnvasado;
    });
   }

   save() {
    this.isSaving = true;
    if (this.lineaEnvasado.idLineaEnvasado !== null) {
      this.lineaEnvasadoService
        .update(this.lineaEnvasado)
        .subscribe((response) => this.onSaveSuccess(response), () => this.onSaveError());
    } else {
      this.lineaEnvasadoService
        .create(this.lineaEnvasado)
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
