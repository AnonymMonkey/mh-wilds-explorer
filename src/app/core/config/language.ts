import { Injectable, signal, computed } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  selectedLanguage = signal<string>('de');

  baseURL = computed(() => `https://wilds.mhdb.io/${this.selectedLanguage()}`);

  setLanguage(lang: string) {
    this.selectedLanguage.set(lang);
  }
}
