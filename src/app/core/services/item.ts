import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LanguageService } from '../config/language';
import { Item } from '../models/item.model';

@Injectable({
  providedIn: 'root',
})
export class ItemService {
  private http = inject(HttpClient);
  private langService = inject(LanguageService);

  getAll() {
    const url = `${this.langService.baseURL()}/items`;
    return this.http.get<Item[]>(url);
  }

  getById(id: string) {
    const url = `${this.langService.baseURL()}/items/${id}`;
    return this.http.get<Item[]>(url);
  }
}
