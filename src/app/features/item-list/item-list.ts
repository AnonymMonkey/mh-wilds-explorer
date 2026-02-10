import { Component, inject } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { ItemService } from '../../core/services/item';

@Component({
  selector: 'app-item-list',
  imports: [],
  templateUrl: './item-list.html',
  styleUrl: './item-list.scss',
})
export class ItemList {
  private itemService = inject(ItemService);

  itemResource = rxResource({
    stream: () => this.itemService.getAll(),
  });
}
