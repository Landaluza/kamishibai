import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

// services de las tablas.
import { EmpleadoService } from './services/empleado.service';
import { ControlService } from './services/control.service';
import { ControlDiarioService } from './services/controlDiario.service';
import { LineaEnvasadoService } from './services/lineaEnvasado.service';
import { TarjetaControlService } from './services/tarjetaControl.service';
import { MaterialModule } from '../material.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbDateAdapter } from '@ng-bootstrap/ng-bootstrap';
import { NgbDateMomentAdapter } from './util/datepicker-adapter';

@NgModule({
  declarations: [],
  imports: [ CommonModule, MaterialModule, FontAwesomeModule
  ],
  exports: [MaterialModule, FontAwesomeModule],
  providers: [
    EmpleadoService,
    ControlService,
    ControlDiarioService,
    LineaEnvasadoService,
    TarjetaControlService,
    { provide: NgbDateAdapter, useClass: NgbDateMomentAdapter }
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule {
  static forRoot() {
    return {
        ngModule: SharedModule
    };
}
}
