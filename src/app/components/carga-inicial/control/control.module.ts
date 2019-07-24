import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlComponent } from './control.component';
import { routesControl } from './control.routing';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../../shared/shared.module';

const ENTITY_STATES = [...routesControl ];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ENTITY_STATES),
    SharedModule
  ],
  declarations: [ControlComponent]
})
export class ControlModule { }
