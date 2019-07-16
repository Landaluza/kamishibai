import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';

export const routesHome: Routes = [
  {
    path: '',
    component: HomeComponent
    // canActivate: [UserRouteAccessService]
}
];
