import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

// import { AppComponent } from '../../frontend/app.component';
import { InicioComponent } from '../frontend/src/app/component/inicio/inicio.component';
import { MaestroComponent } from '../frontend/src/app/component//maestro/maestro.component';
import { DetalleComponent } from '../frontend/src/app/component/detalle/detalle.component';
import { AddeditComponent } from '../frontend/src/app/component/addedit/addedit.component';
// import { ModalOptionsComponent } from './modal-options/modal-options.component';

// Explicacion sobre routing:
// https://blog.angularindepth.com/the-three-pillars-of-angular-routing-angular-router-series-introduction-fb34e4e8758eting
const app_routes: Routes = [
        // No se puede utilizar path: '/' porque causa un error.
    // { path: '/', component: InicioComponent, pathMatch: 'full'},
    // { path: 'home', pathMatch: 'full', redirectTo: '' },
    { path: 'home', component: InicioComponent, pathMatch: 'full'},
    { path: 'inicio', component: InicioComponent, pathMatch: 'full'},
    { path: 'maestro', component: MaestroComponent },
    { path: 'addedit', component: AddeditComponent },
    { path: 'ficha', component: DetalleComponent },
    // { path: 'ModalOptionsComponent', component: ModalOptionsComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
    imports: [
        RouterModule.forRoot( app_routes, { useHash: true, enableTracing: true } )
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule { }


