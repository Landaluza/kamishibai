import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TurnoComponent } from './turno.component';
import { routesTurno } from './turno.routing';
import { SharedModule } from '../../../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TurnoUpdateComponent } from './turno-update.component';

const ENTITY_STATES = [...routesTurno ];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    RouterModule.forChild(ENTITY_STATES)
  ],
  declarations: [TurnoComponent, TurnoUpdateComponent]
})
export class TurnoModule { }
