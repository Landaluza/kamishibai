import { Routes, RouterModule } from '@angular/router';
import { EmpleadoComponent } from '../empleado/empleado.component';

export const routesEmpleado: Routes = [
  {
    path: '',
    component: EmpleadoComponent
    // canActivate: [UserRouteAccessService]
}
];

