import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LanguageService } from '../config/language';
import { Weapon } from '../models/weapon.model';

@Injectable({
  providedIn: 'root',
})
export class WeaponService {
  private http = inject(HttpClient);
  private langService = inject(LanguageService);

  getAll() {
    const url = `${this.langService.baseURL()}/weapons`;
    return this.http.get<Weapon[]>(url);
  }

  getById(id: string) {
    const url = `${this.langService.baseURL()}/weapons/${id}`;
    return this.http.get<Weapon[]>(url);
  }
}
