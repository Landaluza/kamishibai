import { Routes, RouterModule, Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { ControlDiarioService } from '../../../shared/services/controlDiario.service';
import { Injectable } from '@angular/core';
import { ControlDiario, IControlDiario } from '../../../shared/models/controlDiario.model';
import { ControlDiarioComponent } from './control-diario.component';
import { ControlDiarioUpdateComponent } from './control-diario-update.component';
import { Observable, of } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { HttpResponse } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class UserMgmtResolve implements Resolve<any> {
    constructor(private service: ControlDiarioService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IControlDiario> {
      console.log(route.params);
      const id = route.params['idControlDiario'] ? route.params['idControlDiario'] : null;
      console.log(id);
      if (id !== null) {
        return this.service.find(id).pipe(
          filter((response: HttpResponse<ControlDiario>) => response.ok),
          map((controlDiario: HttpResponse<ControlDiario>) => controlDiario.body)
        );
      }
      return of(new ControlDiario());
    }
}

export const routesControlDiario: Routes = [
  {
    path: '',
    component: ControlDiarioComponent
  },
  {
    path: ':idControlDiario/edit',
    component: ControlDiarioUpdateComponent,
    resolve: {
      empleado: UserMgmtResolve
    }
  },
  {
    path: 'new',
    component: ControlDiarioUpdateComponent,
    resolve: {
        user: UserMgmtResolve
    }
  }
];
