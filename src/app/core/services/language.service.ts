import { Injectable, signal } from '@angular/core';
import { allTranslations } from '../translations'; // ⚡ Import Object ដែលបានផ្ដុំរួចមកប្រើ

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  currentLang = signal<'en' | 'km'>((localStorage.getItem('lang') as 'en' | 'km') || 'en');

  // ⚡ យកទិន្នន័យដែលបានផ្ដុំរួចមកហៅប្រើប្រាស់ផ្ទាល់តែម្តង
  private translations = allTranslations;

  changeLanguage(lang: 'en' | 'km') {
    this.currentLang.set(lang);
    localStorage.setItem('lang', lang);
  }

  translate(key: string): string {
    const translation = this.translations[key];
    if (!translation) return key;
    return translation[this.currentLang()];
  }
}