import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlDiarioComponent, ControlDiarioDeleteComponent } from './control-diario.component';
import { ControlDiarioUpdateComponent } from './control-diario-update.component';
import { routesControlDiario } from './control-diario.routing';
import { SharedModule } from '../../../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbDateAdapter, NgbDateNativeAdapter, NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';

const ENTITY_STATES = [...routesControlDiario ];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    NgbDatepickerModule,
    RouterModule.forChild(ENTITY_STATES)
  ],
  declarations: [ControlDiarioComponent, ControlDiarioUpdateComponent, ControlDiarioDeleteComponent],
  providers: [{provide: NgbDateAdapter, useClass: NgbDateNativeAdapter}],
  entryComponents: [ControlDiarioDeleteComponent]
})
export class ControlDiarioModule { }
