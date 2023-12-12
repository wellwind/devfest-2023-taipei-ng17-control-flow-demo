import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'ng-if',
    loadComponent: () => import('./pages/ng-if.component'),
  },
  {
    path: 'at-if',
    loadComponent: () => import('./pages/at-if.component'),
  },
];
