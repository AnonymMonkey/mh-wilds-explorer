import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LanguageService } from '../config/language';
import { Monster } from '../models/monster.model';

@Injectable({
  providedIn: 'root',
})
export class MonsterService {
  private http = inject(HttpClient);
  private langService = inject(LanguageService);

  getAll() {
    const url = `${this.langService.baseURL()}/monsters`;
    return this.http.get<Monster[]>(url);
  }

  getById(id: string) {
    const url = `${this.langService.baseURL()}/monsters/${id}`;
    return this.http.get<Monster[]>(url);
  }
}
