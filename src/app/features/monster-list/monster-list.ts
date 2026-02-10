import { Component, inject, signal, viewChild, ElementRef } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { MonsterService } from '../../core/services/monster';
import { Monster } from '../../core/models/monster.model';

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

  handleImageError(event: Event): void {
    const imgElement = event.target as HTMLImageElement;
    imgElement.src = 'assets/MHWilds-Database-main/monster/assets/icons/Unknown_Icon.png';
  }

  getMonsterImagePath(name: string): string {
    const formattedName = name
      .replace(/ /g, '_')
      .replace(/-/g, '_')
      .replace(/Wächter/g, 'Guardian')
      .replace(/Vulkan/g, 'Ebony');

    return `assets/MHWilds-Database-main/monster/assets/icons/${formattedName}_Icon.png`;
  }

  // Signal für das ausgewählte Monster
  selectedMonster = signal<Monster | null>(null);

  // Zugriff auf das Dialog-Element im HTML
  monsterDialog = viewChild<ElementRef<HTMLDialogElement>>('monsterDialog');

  openDetails(monster: Monster) {
    this.selectedMonster.set(monster);
    this.monsterDialog()?.nativeElement.showModal(); // Öffnet den Dialog nativ
  }

  closeDetails() {
    this.monsterDialog()?.nativeElement.close();
    this.selectedMonster.set(null);
  }
}
