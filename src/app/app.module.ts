import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbDatepickerConfig, NgbModule } from '@ng-bootstrap/ng-bootstrap';

import * as moment from 'moment';
// Iconos en svg
import './vendor.ts';
// Para que las fechas y números esten en español.
import { LOCALE_ID} from '@angular/core';
// https://angular.io/guide/i18n#i18n-pipes
import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';
import { PruebaPipe } from './pipes/prueba.pipe';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';
import { Ng2Webstorage } from 'ngx-webstorage';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MomentTimezoneModule} from 'angular-moment-timezone';

// the second parameter es is optional
registerLocaleData(localeEs, 'es');
@NgModule({
  declarations: [
    AppComponent,
    PruebaPipe
    ],
  imports: [
    AppRoutingModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    NoopAnimationsModule,
    SharedModule,
    Ng2Webstorage.forRoot({ prefix: 'app', separator: '-' }),
    FontAwesomeModule,
    FlexLayoutModule,
    MomentTimezoneModule
    ],
  providers: [
    {provide: LOCALE_ID, useValue: 'es'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
 }
