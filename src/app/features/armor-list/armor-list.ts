import { Component, inject } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { ArmorService } from '../../core/services/armor';

@Component({
  selector: 'app-armor-list',
  imports: [],
  templateUrl: './armor-list.html',
  styleUrl: './armor-list.scss',
})
export class ArmorList {
  private armorService = inject(ArmorService);

  armorResource = rxResource({
    stream: () => this.armorService.getAll(),
  });
}
