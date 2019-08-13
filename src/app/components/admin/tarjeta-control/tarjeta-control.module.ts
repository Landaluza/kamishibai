import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TarjetaControlComponent, TarjetaControlDeleteComponent } from './tarjeta-control.component';
import { TarjetaControlUpdateComponent } from './tarjeta-control-update.component';
import { SharedModule } from '../../../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { routesTarjetaControl } from './tarjeta-control.routing';

const ENTITY_STATES = [...routesTarjetaControl ];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    RouterModule.forChild(ENTITY_STATES)
  ],
  declarations: [TarjetaControlComponent, TarjetaControlUpdateComponent, TarjetaControlDeleteComponent],
  entryComponents: [TarjetaControlDeleteComponent]
})
export class TarjetaControlModule { }
