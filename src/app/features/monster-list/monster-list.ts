import { Component, inject } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { MonsterService } from '../../core/services/monster';

@Component({
  selector: 'app-monster-list',
  imports: [],
  templateUrl: './monster-list.html',
  styleUrl: './monster-list.scss',
})
export class MonsterList {
  private monsterService = inject(MonsterService);

  monsterResource = rxResource({
    stream: () => this.monsterService.getAll(),
  });
}
