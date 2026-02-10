import { Component, inject } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { WeaponService } from '../../core/services/weapon';

@Component({
  selector: 'app-weapon-list',
  imports: [],
  templateUrl: './weapon-list.html',
  styleUrl: './weapon-list.scss',
})
export class WeaponList {
  private weaponService = inject(WeaponService);

  weaponResource = rxResource({
    stream: () => this.weaponService.getAll(),
  });
}
