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
  {
    path: 'ng-for',
    loadComponent: () => import('./pages/ng-for.component'),
  },
  {
    path: 'at-for',
    loadComponent: () => import('./pages/at-for.component'),
  },
  {
    path: 'ng-switch',
    loadComponent: () => import('./pages/ng-switch.component'),
  },
  {
    path: 'at-switch',
    loadComponent: () => import('./pages/at-switch.component'),
  },
  {
    path: 'defer',
    children: [
      {
        path: 'basic',
        loadComponent: () => import('./pages/defer/defer-basic.component'),
      },
      {
        path: 'blocks',
        loadComponent: () => import('./pages/defer/defer-blocks.component'),
      },
      {
        path: 'trigger-when',
        loadComponent: () => import('./pages/defer/defer-trigger-when.component'),
      },
      {
        path: 'trigger-on-viewport',
        loadComponent: () => import('./pages/defer/defer-trigger-on-viewport.component'),
      },
    ],
  },
];
