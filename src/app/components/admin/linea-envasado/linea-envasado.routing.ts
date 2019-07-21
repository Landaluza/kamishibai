import { Routes, RouterModule, Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { LineaEnvasadoService } from '../../../shared/services/lineaEnvasado.service';
import { Injectable } from '@angular/core';
import { filter, map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { HttpResponse } from '@angular/common/http';
import { LineaEnvasado } from '../../../shared/models/lineaEnvasado.model';
import { LineaEnvasadoComponent } from './linea-envasado.component';
import { LineaEnvasadoUpdateComponent } from './linea-envasado-update.component';

@Injectable({ providedIn: 'root' })
export class LineaEnvasadoMgmtResolve implements Resolve<any> {
    constructor(private service: LineaEnvasadoService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const id = route.params['idLineaEnvasado'] ? route.params['idLineaEnvasado'] : null;
        if (id) {
          return this.service.find(id).pipe(
            filter((response: HttpResponse<LineaEnvasado>) => response.ok),
            map((lineaEnvasado: HttpResponse<LineaEnvasado>) => lineaEnvasado.body)
          );
        }
        return new LineaEnvasado(null);
    }
}

export const routesLineaEnvasado: Routes = [
  {
    path: '',
    component: LineaEnvasadoComponent
  },
  {
    path: ':idLineaEnvasado/edit',
    component: LineaEnvasadoUpdateComponent,
    resolve: {
      lineaEnvasado: LineaEnvasadoMgmtResolve
    }
  },
  {
    path: 'new',
    component: LineaEnvasadoUpdateComponent,
    resolve: {
      lineaEnvasado: LineaEnvasadoMgmtResolve
    }
  }
];
