import { Routes, RouterModule, Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { EmpleadoComponent } from '../empleado/empleado.component';
import { EmpleadoService } from '../../../shared/services/empleado.service';
import { Empleado } from '../../../shared/models/empleado.model';
import { Injectable } from '@angular/core';
import { EmpleadoUpdateComponent } from './empleado-update.component';
import { HttpResponse } from '@angular/common/http';
import { filter, map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class EmpleadoMgmtResolve implements Resolve<any> {
    constructor(private service: EmpleadoService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const id = route.params['idEmpleado'] ? route.params['idEmpleado'] : null;
        if (id) {
          return this.service.find(id).pipe(
            filter((response: HttpResponse<Empleado>) => response.ok),
            map((empleado: HttpResponse<Empleado>) => empleado.body)
          );
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
  },
  {
    path: 'new',
    component: EmpleadoUpdateComponent,
    resolve: {
        user: EmpleadoMgmtResolve
    }
  }
];

