import { ControlDiarioService } from './../../../shared/services/controlDiario.service';
import { IControlDiario } from './../../../shared/models/controlDiario.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TarjetaControlService } from '../../../shared/services/tarjetaControl.service';
import { ITarjetaControl } from '../../../shared/models/tarjetaControl.model';

@Component({
  selector: 'app-tarjeta-control-update',
  templateUrl: './tarjeta-control-update.component.html',
  styleUrls: ['./tarjeta-control-update.component.css']
})
export class TarjetaControlUpdateComponent implements OnInit {

  tarjetaControl: ITarjetaControl;
  isSaving: boolean;
  controlesDiarios: IControlDiario[];
  fechaDp: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private controlDiarioService: ControlDiarioService,
    private tarjetaControlService: TarjetaControlService
  ) { }

  ngOnInit(): void {
    this.route.data.subscribe(({ tarjetaControl }) => {
      this.tarjetaControl = tarjetaControl;
    });

    this.controlDiarioService.queryAll().subscribe(response => {
      this.controlesDiarios = response.body;
    });
  }

  save() {
    this.isSaving = true;
    if (this.tarjetaControl.idTarjetaControl) {
      this.tarjetaControlService
        .update(this.tarjetaControl)
        .subscribe((response) => this.onSaveSuccess(response), () => this.onSaveError());
    } else {
      this.tarjetaControlService
        .create(this.tarjetaControl)
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

  trackControlDiarioById(index: number, item: IControlDiario) {
    return item.idControlDiario;
  }
}
