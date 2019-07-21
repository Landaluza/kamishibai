import { Component, OnInit } from '@angular/core';
import { ControlService } from '../../../shared/services/control.service';
import { IControl, Control } from '../../../shared/models/control.model';
import { ActivatedRoute, Router } from '@angular/router';
import { LineaEnvasadoService } from '../../../shared/services/lineaEnvasado.service';
import { LineaEnvasado, ILineaEnvasado } from '../../../shared/models/lineaEnvasado.model';

@Component({
  selector: 'app-control-update',
  templateUrl: './control-update.component.html',
  styleUrls: ['./control-update.component.css']
})
export class ControlUpdateComponent implements OnInit {

  control: IControl;
  lineaEnvasados: ILineaEnvasado[];
  isSaving: boolean;

  constructor(
    private controlService: ControlService,
    private lineaEnvasadoService: LineaEnvasadoService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.route.data.subscribe(({ control }) => {
      this.control = control;
    });

    this.lineaEnvasadoService.queryAll().subscribe(response => {
      this.lineaEnvasados = response.body;
    });
  }

  save() {
    this.isSaving = true;
    if (this.control.idControl !== null) {
      this.controlService.update(this.control).subscribe(response => this.onSaveSuccess(response), () => this.onSaveError());
    } else {
      this.controlService.create(this.control).subscribe(response => this.onSaveSuccess(response), () => this.onSaveError());
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

  trackLineaEnvasadoById(index: number, item: ILineaEnvasado) {
    return item.idLineaEnvasado;
  }
}
