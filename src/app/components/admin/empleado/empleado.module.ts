import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmpleadoComponent } from './empleado.component';
import { SharedModule } from '../../../shared/shared.module';
import { routesEmpleado } from './empleado.routing';
import { RouterModule } from '@angular/router';

const ENTITY_STATES = [...routesEmpleado ];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(ENTITY_STATES)
  ],
  declarations: [EmpleadoComponent]
})
export class EmpleadoModule { }
