import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmpleadoComponent, EmpleadoDeleteComponent } from './empleado.component';
import { SharedModule } from '../../../shared/shared.module';
import { routesEmpleado } from './empleado.routing';
import { RouterModule } from '@angular/router';
import { EmpleadoUpdateComponent } from './empleado-update.component';
import { FormsModule } from '@angular/forms';

const ENTITY_STATES = [...routesEmpleado ];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    RouterModule.forChild(ENTITY_STATES)
  ],
  declarations: [EmpleadoComponent, EmpleadoUpdateComponent, EmpleadoDeleteComponent],
  entryComponents: [EmpleadoDeleteComponent]
})
export class EmpleadoModule { }
