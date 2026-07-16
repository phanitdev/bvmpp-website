import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  currentLang = signal<'en' | 'km'>((localStorage.getItem('lang') as 'en' | 'km') || 'en');

  private translations: Record<string, Record<'en' | 'km', string>> = {
    'nav.about': { en: 'About', km: 'អំពីយើង' },
    'nav.properties': { en: 'Properties', km: 'អចលនទ្រព្យ' },
    'nav.newBuildings': { en: 'New Buildings', km: 'ផ្ទះកំពុងសាងសង់' },
    'nav.newPromotion': { en: 'New-Promotion', km: 'ការផ្សព្វផ្សាយថ្មី' },
    'nav.career': { en: 'Career', km: 'ឱកាសការងារ' },
    'nav.bookVisit': { en: 'Book a Visit', km: 'កក់ការទស្សនា' }
  };


  flags = {
    en: 'assets/images/en.png',
    km: 'assets/images/kh.png'
  };

  changeLanguage(lang: 'en' | 'km') {
    this.currentLang.set(lang);
    localStorage.setItem('lang', lang); 
  }

  translate(key: string): string {
    const translation = this.translations[key];
    if (!translation) {
      return key; 
    }
    return translation[this.currentLang()];
  }
}