import { Component, inject } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { SkillService } from '../../core/services/skill';

@Component({
  selector: 'app-skill-list',
  imports: [],
  templateUrl: './skill-list.html',
  styleUrl: './skill-list.scss',
})
export class SkillList {
  private skillService = inject(SkillService);

  skillResource = rxResource({
    stream: () => this.skillService.getAll(),
  });
}
