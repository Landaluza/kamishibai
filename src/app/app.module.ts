import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatToolbarModule } from '@angular/material/toolbar';

// Para que las fechas y números esten en español.
import { LOCALE_ID} from '@angular/core';
// https://angular.io/guide/i18n#i18n-pipes
import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';
import { PruebaPipe } from './pipes/prueba.pipe';
import { CountdownComponent } from './components/countdown/countdown.component';
import { RelojComponent } from './components/reloj/reloj.component';
import { ShowCardComponent } from './components/show-card/show-card.component';
import { CabeceraComponent } from './components/cabecera/cabecera.component';
import { RowEmpleadoComponent } from './components/row-empleado/row-empleado.component';
import { RowHorasComponent } from './components/row-horas/row-horas.component';
import { RowHorasControlComponent } from './components/row-horas-control/row-horas-control.component';
import { FooterComponent } from './components/footer/footer.component';
import { RowCardsComponent } from './components/row-cards/row-cards.component';

// the second parameter es is optional
registerLocaleData(localeEs, 'es');

@NgModule({
  declarations: [
    AppComponent,
    PruebaPipe,
    CountdownComponent,
    RelojComponent,
    ShowCardComponent,
    CabeceraComponent,
    RowEmpleadoComponent,
    RowHorasComponent,
    RowHorasControlComponent,
    FooterComponent,
    RowCardsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatGridListModule,
    MatToolbarModule,
    BrowserAnimationsModule,
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'es'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
