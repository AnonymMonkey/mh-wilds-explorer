import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'monsters',
    loadComponent: () => import('./features/monster-list/monster-list').then((m) => m.MonsterList),
  },
  //     {
  //     path: 'items',
  //     loadComponent: () => import('./features/item-list/item-list').then((m) => m.ItemList),
  //   },
];
