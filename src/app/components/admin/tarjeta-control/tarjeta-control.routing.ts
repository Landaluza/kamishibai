import { Routes, RouterModule, Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { TarjetaControl } from '../../../shared/models/tarjetaControl.model';
import { TarjetaControlService } from '../../../shared/services/tarjetaControl.service';
import { filter, map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { TarjetaControlComponent } from './tarjeta-control.component';
import { TarjetaControlUpdateComponent } from './tarjeta-control-update.component';
import { HttpResponse } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class TarjetaControlResolver implements Resolve<any> {
    constructor(private service: TarjetaControlService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<TarjetaControl> {
      const id = route.params['idTarjetaControl'] ? route.params['idTarjetaControl'] : null;
      if (id !== null) {
        return this.service.find(id).pipe(
          filter((response: HttpResponse<TarjetaControl>) => response.ok),
          map((tarjetaControl: HttpResponse<TarjetaControl>) => tarjetaControl.body)
        );
      }
      return of(new TarjetaControl(null));
    }
}

export const routesTarjetaControl: Routes = [
  {
    path: '',
    component: TarjetaControlComponent
  },
  {
    path: ':idTarjetaControl/edit',
    component: TarjetaControlUpdateComponent,
    resolve: {
      tarjetaControl: TarjetaControlResolver
    }
  },
  {
    path: 'new',
    component: TarjetaControlUpdateComponent,
    resolve: {
      tarjetaControl: TarjetaControlResolver
    }
  }
];
