import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

// services de las tablas.
import { EmpleadoService } from './services/empleado.service';
import { ControlService } from './services/control.service';
import { ControlDiarioService } from './services/controlDiario.service';
import { LineaEnvasadoService } from './services/lineaEnvasado.service';
import { TarjetaControlService } from './services/tarjetaControl.service';
import { MaterialModule } from '../material.module';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [],
  imports: [ CommonModule, MaterialModule
  ],
  exports: [MaterialModule],
  providers: [
    EmpleadoService,
    ControlService,
    ControlDiarioService,
    LineaEnvasadoService,
    TarjetaControlService,
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
