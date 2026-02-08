import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LanguageService } from '../config/language';
import { Armor } from '../models/armor.model';

@Injectable({
  providedIn: 'root',
})
export class ArmorService {
  private http = inject(HttpClient);
  private langService = inject(LanguageService);

  getAll() {
    const url = `${this.langService.baseURL()}/armors`;
    return this.http.get<Armor[]>(url);
  }

  getById(id: string) {
    const url = `${this.langService.baseURL()}/armors/${id}`;
    return this.http.get<Armor[]>(url);
  }
}
