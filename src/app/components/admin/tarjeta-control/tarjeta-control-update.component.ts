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

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private tarjetaControlService: TarjetaControlService
  ) { }

  ngOnInit(): void {
    this.route.data.subscribe(({ tarjetaControl }) => {
      console.log(tarjetaControl);
      this.tarjetaControl = tarjetaControl;
    });
  }

  save() {
    this.isSaving = true;
    console.log(this.tarjetaControl);
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
}
