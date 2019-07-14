import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RowEmpleadoService } from './services/row-empleado.service';

@NgModule({
  declarations: [],
  imports: [ CommonModule
  ],
  exports: [],
  providers: [RowEmpleadoService],
})
export class SharedModule {
  static forRoot() {
    return {
        ngModule: SharedModule
    };
}
}
