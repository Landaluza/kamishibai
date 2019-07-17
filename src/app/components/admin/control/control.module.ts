import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlComponent } from './control.component';
import { routesControl } from './control.routing';
import { SharedModule } from '../../../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ControlUpdateComponent } from './control-update.component';

const ENTITY_STATES = [...routesControl ];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    RouterModule.forChild(ENTITY_STATES)
  ],
  declarations: [ControlComponent, ControlUpdateComponent]
})
export class ControlModule { }
