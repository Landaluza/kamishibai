import { Routes, RouterModule, Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { EmpleadoComponent } from '../empleado/empleado.component';
import { EmpleadoService } from '../../../shared/services/empleado.service';
import { Empleado } from '../../../shared/models/empleado.model';
import { Injectable } from '@angular/core';
import { EmpleadoUpdateComponent } from './empleado-update.component';

@Injectable({ providedIn: 'root' })
export class EmpleadoMgmtResolve implements Resolve<any> {
    constructor(private service: EmpleadoService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const id = route.params['idEmpleado'] ? route.params['idEmpleado'] : null;
        console.log(id);
        if (id) {
            return this.service.find(id);
        }
        return new Empleado();
    }
}


export const routesEmpleado: Routes = [
  {
    path: '',
    component: EmpleadoComponent
},
{
  path: ':idEmpleado/edit',
  component: EmpleadoUpdateComponent,
  resolve: {
      empleado: EmpleadoMgmtResolve
  }
}
];

