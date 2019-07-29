import { Routes, RouterModule, Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { TurnoService } from '../../../shared/services/turno.service';
import { filter, map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { HttpResponse } from '@angular/common/http';
import { Turno } from '../../../shared/models/turno.model';
import { TurnoComponent } from './turno.component';

@Injectable({ providedIn: 'root' })
export class TurnoResolver implements Resolve<any> {
    constructor(private service: TurnoService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Turno> {
      const id = route.params['idtTurno'] ? route.params['idtTurno'] : null;
      if (id !== null) {
        return this.service.find(id).pipe(
          filter((response: HttpResponse<Turno>) => response.ok),
          map((turno: HttpResponse<Turno>) => turno.body)
        );
      }
      return of(new Turno(null));
    }
}

export const routesTurno: Routes = [
  {
    path: '',
    component: TurnoComponent
  },
  // {
  //   path: ':idTarjetaControl/edit',
  //   component: TarjetaControlUpdateComponent,
  //   resolve: {
  //     tarjetaControl: TarjetaControlResolver
  //   }
  // },
  // {
  //   path: 'new',
  //   component: TarjetaControlUpdateComponent,
  //   resolve: {
  //     tarjetaControl: TarjetaControlResolver
  //   }
  // }
];
