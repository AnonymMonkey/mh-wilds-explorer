import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'monsters',
    loadComponent: () => import('./features/monster-list/monster-list').then((m) => m.MonsterList),
  },
  {
    path: 'items',
    loadComponent: () => import('./features/item-list/item-list').then((m) => m.ItemList),
  },
  {
    path: 'armor',
    loadComponent: () => import('./features/armor-list/armor-list').then((m) => m.ArmorList),
  },
  {
    path: 'weapons',
    loadComponent: () => import('./features/weapon-list/weapon-list').then((m) => m.WeaponList),
  },
  {
    path: 'skills',
    loadComponent: () => import('./features/skill-list/skill-list').then((m) => m.SkillList),
  },
];
