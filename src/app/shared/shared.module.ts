import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// services de las tablas.
import { EmpleadoService } from './services/empleado.service';
import { ControlService } from './services/control.service';
import { ControlDiarioService } from './services/controlDiario.service';
import { LineaEnvasadoService } from './services/lineaEnvasado.service';
import { TarjetaControlService } from './services/tarjetaControl.service';

@NgModule({
  declarations: [],
  imports: [ CommonModule
  ],
  exports: [],
  providers: [
    EmpleadoService,
    ControlService,
    ControlDiarioService,
    LineaEnvasadoService,
    TarjetaControlService,
  ],
})
export class SharedModule {
  static forRoot() {
    return {
        ngModule: SharedModule
    };
}
}
