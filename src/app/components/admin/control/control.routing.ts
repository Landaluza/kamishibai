import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot, Routes } from '@angular/router';

import { Control, IControl } from '../../../shared/models/control.model';
import { ControlService } from '../../../shared/services/control.service';
import { ControlUpdateComponent } from './control-update.component';
import { ControlComponent } from './control.component';
import { filter, map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { HttpResponse } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class ControlMgmtResolve implements Resolve<any> {
    constructor(private service: ControlService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IControl> {
      console.log(route.params);
      const id = route.params['idControl'] ? route.params['idControl'] : null;
      console.log(id);
      if (id !== null) {
        return this.service.find(id).pipe(
          filter((response: HttpResponse<Control>) => response.ok),
          map((control: HttpResponse<Control>) => control.body)
        );
      }
      return of(new Control(null));
    }
}

export const routesControl: Routes = [
  {
    path: '',
    component: ControlComponent
  },
  {
    path: ':idControl/edit',
    component: ControlUpdateComponent,
    resolve: {
      control: ControlMgmtResolve
    }
  },
  {
    path: 'new',
    component: ControlUpdateComponent,
    resolve: {
      control: ControlMgmtResolve
    }
  }
];

