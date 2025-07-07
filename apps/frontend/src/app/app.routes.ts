import { Route } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AccountsGeneral } from './accounts-general/accounts-general';

export const appRoutes: Route[] = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'accounts-general',
    component: AccountsGeneral,
  },
];
