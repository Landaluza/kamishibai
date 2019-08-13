import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LineaEnvasadoComponent, LineaEnvasadoDeleteComponent } from './linea-envasado.component';
import { routesLineaEnvasado } from './linea-envasado.routing';
import { SharedModule } from '../../../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LineaEnvasadoUpdateComponent } from './linea-envasado-update.component';

const ENTITY_STATES = [...routesLineaEnvasado ];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    RouterModule.forChild(ENTITY_STATES)
  ],
  declarations: [LineaEnvasadoComponent, LineaEnvasadoUpdateComponent, LineaEnvasadoDeleteComponent],
  entryComponents: [LineaEnvasadoDeleteComponent]
})
export class LineaEnvasadoModule { }
