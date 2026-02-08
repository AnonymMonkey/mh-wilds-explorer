import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LanguageService } from '../config/language';
import { Skill } from '../models/skill.model';

@Injectable({
  providedIn: 'root',
})
export class SkillService {
  private http = inject(HttpClient);
  private langService = inject(LanguageService);

  getAll() {
    const url = `${this.langService.baseURL()}/skills`;
    return this.http.get<Skill[]>(url);
  }

  getById(id: string) {
    const url = `${this.langService.baseURL()}/skills/${id}`;
    return this.http.get<Skill[]>(url);
  }
}
