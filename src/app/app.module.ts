import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Para usar Angular Material.
import {MaterialModule} from './material.module';

// Para que las fechas y números esten en español.
import { LOCALE_ID} from '@angular/core';
// https://angular.io/guide/i18n#i18n-pipes
import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';

import { PruebaPipe } from './pipes/prueba.pipe';
import { CountdownComponent } from './components/countdown/countdown.component';
import { RelojComponent } from './components/reloj/reloj.component';
import { CabeceraComponent } from './components/cabecera/cabecera.component';
import { RowEmpleadoComponent } from './components/row-empleado/row-empleado.component';
import { RowHorasComponent } from './components/row-horas/row-horas.component';
import { RowHorasControlComponent } from './components/row-horas-control/row-horas-control.component';
import { FooterComponent } from './components/footer/footer.component';
import { RowCardsComponent } from './components/row-cards/row-cards.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';
import { Ng2Webstorage } from 'ngx-webstorage';

// the second parameter es is optional
registerLocaleData(localeEs, 'es');
@NgModule({
  declarations: [
    AppComponent,
    PruebaPipe,
    CountdownComponent,
    RelojComponent,
    CabeceraComponent,
    RowEmpleadoComponent,
    RowHorasComponent,
    RowHorasControlComponent,
    FooterComponent,
    RowCardsComponent
    ],
  imports: [
    MaterialModule,
    BrowserModule,
    AppRoutingModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    Ng2Webstorage.forRoot({ prefix: 'app', separator: '-' }),
    ],
  providers: [
    {provide: LOCALE_ID, useValue: 'es'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
