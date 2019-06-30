import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// server y frontend.
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

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

// Components server y frontend.
// import { AppComponent } from './app.component';
import { DetalleComponent } from '../../frontend/src/app/component/detalle/detalle.component';
import { MaestroComponent } from '../../frontend/src/app/component/maestro/maestro.component';
import { TablaProcesosComponent } from '../../frontend/src/app/shared/tabla-procesos/tabla-procesos.component';
// import { FooterComponent } from './shared/footer/footer.component';
// import { NavbarComponent } from './shared/navbar/navbar.component';
import { AddeditComponent } from '../../frontend/src/app/component/addedit/addedit.component';
import { InicioComponent } from '../../frontend/src/app/component/inicio/inicio.component';
// import { ModalOptionsComponent } from './modal-options/modal-options.component';


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
    RowCardsComponent,
    MaestroComponent,
    MaestroComponent,
    TablaProcesosComponent,
    AddeditComponent,
    DetalleComponent,
    InicioComponent
    ],
  imports: [
    MaterialModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AppRoutingModule
    ],
  providers: [
    {provide: LOCALE_ID, useValue: 'es'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
