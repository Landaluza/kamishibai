import { Component, OnInit } from '@angular/core';
import { ControlDiarioService } from '../../../shared/services/controlDiario.service';
import { ControlService } from '../../../shared/services/control.service';
import { EmpleadoService } from '../../../shared/services/empleado.service';
import { ActivatedRoute, Router } from '@angular/router';
import { IControlDiario, ControlDiario } from '../../../shared/models/controlDiario.model';
import { IControl } from '../../../shared/models/control.model';
import { IEmpleado } from '../../../shared/models/empleado.model';
import * as moment from 'moment';

@Component({
  selector: 'app-control-diario-update',
  templateUrl: './control-diario-update.component.html',
  styleUrls: ['./control-diario-update.component.css']
})
export class ControlDiarioUpdateComponent implements OnInit {

  isSaving: boolean;
  controlDiario: IControlDiario;
  controles: IControl[];
  empleados: IEmpleado[];
  fechaDp: any;

  constructor(
    private controlDiarioService: ControlDiarioService,
    private controlService: ControlService,
    private empleadoService: EmpleadoService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.isSaving = false;
    this.activatedRoute.data.subscribe(({ controlDiario }) => {
      console.log(controlDiario);
      this.controlDiario = controlDiario;
      if(this.controlDiario.idControlDiario){
        this.fechaDp = moment(this.controlDiario.fecha, 'YYYY-MM-DD').format();
      }
    });


    this.controlService.queryAll().subscribe(response => {
      this.controles = response.body;
    });

    this.empleadoService.queryAll().subscribe(response => {
      this.empleados = response.body;
    });
  }

  save() {
    this.isSaving = true;
    console.log(this.controlDiario);
    this.controlDiario.fecha = this.fechaDp != null ? moment(this.fechaDp, 'YYYY-MM-DD') : null;
    if (this.controlDiario.idControlDiario) {
      this.controlDiarioService.update(this.controlDiario).subscribe(response => this.onSaveSuccess(response), () => this.onSaveError());
    } else {
      this.controlDiario.idControlDiario = null;
      this.controlDiarioService.create(this.controlDiario).subscribe(response => this.onSaveSuccess(response), () => this.onSaveError());
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

  trackControlById(index: number, item: IControl) {
    return item.idControl;
  }

  trackEmpleadoById(index: number, item: IEmpleado) {
    return item.idEmpleado;
  }
}
