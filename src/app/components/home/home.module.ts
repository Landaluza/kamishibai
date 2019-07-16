import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { routesHome } from './route.routing';
import { RouterModule } from '@angular/router';
import { CountdownComponent } from '../countdown/countdown.component';
import { RelojComponent } from '../reloj/reloj.component';
import { CabeceraComponent } from '../cabecera/cabecera.component';
import { RowEmpleadoComponent } from '../row-empleado/row-empleado.component';
import { RowHorasComponent } from '../row-horas/row-horas.component';
import { RowHorasControlComponent } from '../row-horas-control/row-horas-control.component';
import { FooterComponent } from '../footer/footer.component';
import { RowCardsComponent } from '../row-cards/row-cards.component';
import { SharedModule } from '../../shared/shared.module';

const ENTITY_STATES = [...routesHome ];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ENTITY_STATES),
    SharedModule
  ],
  declarations: [HomeComponent,
    CountdownComponent,
    RelojComponent,
    CabeceraComponent,
    RowEmpleadoComponent,
    RowHorasComponent,
    RowHorasControlComponent,
    FooterComponent,
    RowCardsComponent]
})
export class HomeModule { }
