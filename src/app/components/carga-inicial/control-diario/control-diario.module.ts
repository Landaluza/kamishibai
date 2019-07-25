import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlDiarioComponent } from './control-diario.component';
import { routesControlDiario } from './control-diario.routing';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../../shared/shared.module';

const ENTITY_STATES = [...routesControlDiario ];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ENTITY_STATES),
    SharedModule
  ],
  declarations: [ControlDiarioComponent]
})
export class ControlDiarioModule { }
