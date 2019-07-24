import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LineaComponent } from './linea.component';
import { routesLinea } from './linea.routing';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../../shared/shared.module';

const ENTITY_STATES = [...routesLinea ];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ENTITY_STATES),
    SharedModule
  ],
  declarations: [LineaComponent]
})
export class LineaModule { }
