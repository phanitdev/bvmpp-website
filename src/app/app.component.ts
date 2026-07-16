import { Component, HostListener, inject } from '@angular/core';
import { LanguageService } from './core/services/language.service'; // ផ្ទៀងផ្ទាត់ផ្លូវទៅកាន់ Service ឱ្យត្រូវ

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isMenuOpen = false;
  isLangOpen = false;

  // Inject LanguageService ចូល
  langService = inject(LanguageService);

  toggleLangDropdown(event: Event): void {
    event.stopPropagation();
    this.isLangOpen = !this.isLangOpen;
  }

  onLanguageChange(selectedLang: 'en' | 'km'): void {
    console.log('Language changed to:', selectedLang);
    this.langService.changeLanguage(selectedLang); // ⚡ ប្តូរភាសាក្នុង Service
    this.isLangOpen = false;
  }

  @HostListener('document:click')
  closeLangDropdown(): void {
    this.isLangOpen = false;
  }
}