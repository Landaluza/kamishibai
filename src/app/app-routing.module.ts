import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'linea', pathMatch: 'full' },
  { path: 'home', canActivate: [AuthGuard], loadChildren: './components/home/home.module#HomeModule' },
  { path: 'linea', canActivate: [AuthGuard], loadChildren: './components/carga-inicial/linea/linea.module#LineaModule' },
  { path: 'control', canActivate: [AuthGuard], loadChildren: './components/carga-inicial/control/control.module#ControlModule' },
  {
    path: 'control-diario',
    canActivate: [AuthGuard],
    loadChildren: './components/carga-inicial/control-diario/control-diario.module#ControlDiarioModule'
  },
  {
    path: 'admin',
    canActivateChild: [AuthGuard],
    children: [
      {
        path: 'empleado',
        loadChildren: './components/admin/empleado/empleado.module#EmpleadoModule'
      },
      {
        path: 'control',
        loadChildren: './components/admin/control/control.module#ControlModule'
      },
      {
        path: 'linea-envasado',
        loadChildren: './components/admin/linea-envasado/linea-envasado.module#LineaEnvasadoModule'
      },
      {
        path: 'control-diario',
        loadChildren: './components/admin/control-diario/control-diario.module#ControlDiarioModule'
      },
      {
        path: 'tarjeta-control',
        loadChildren: './components/admin/tarjeta-control/tarjeta-control.module#TarjetaControlModule'
      }
    ]
  },
  {
    path: 'login',
    loadChildren: './auth/login/login.module#LoginModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
