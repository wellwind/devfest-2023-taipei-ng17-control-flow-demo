import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'after-render',
    loadComponent: () => import('./pages/after-render/after-render.component'),
  },
  {
    path: 'boolean-attribute',
    loadComponent: () => import('./pages/boolean-attribute/boolean-attribute.component'),
  },
  {
    path: 'control-flow',
    children: [
      {
        path: 'ng-if',
        loadComponent: () => import('./pages/control-flow/ng-if.component'),
      },
      {
        path: 'at-if',
        loadComponent: () => import('./pages/control-flow/at-if.component'),
      },
      {
        path: 'ng-for',
        loadComponent: () => import('./pages/control-flow/ng-for.component'),
      },
      {
        path: 'at-for',
        loadComponent: () => import('./pages/control-flow/at-for.component'),
      },
      {
        path: 'ng-switch',
        loadComponent: () => import('./pages/control-flow/ng-switch.component'),
      },
      {
        path: 'at-switch',
        loadComponent: () => import('./pages/control-flow/at-switch.component'),
      },
    ]
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
      {
        path: 'trigger-on-hover',
        loadComponent: () => import('./pages/defer/defer-trigger-on-hover.component'),
      },
    ],
  },
];
