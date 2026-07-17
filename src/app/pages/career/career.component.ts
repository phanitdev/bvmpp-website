import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { LanguageService } from '../../core/services/language.service'; // ⚡ ផ្ទៀងផ្ទាត់ផ្លូវទៅកាន់ Service ឱ្យត្រូវ

@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.scss']
})
export class CareerComponent implements OnInit, OnDestroy {
  // ⚡ Inject Language Service សម្រាប់ប្រើប្រាស់ប្តូរភាសានៅលើ HTML
  langService = inject(LanguageService);

  currentSlideIndex = 0;
  private slideIntervalId?: ReturnType<typeof setInterval>;

  // ⚡ បញ្ជីស្លាយអាជីពការងារ (Career Slides) ប្រើប្រាស់ Keys រួមដើម្បីងាយស្រួល Update
  readonly slides = [
    { image: 'assets/images/career1.jpg', titleKey: 'slide09.title', descKey: 'slide09.desc' },
    { image: 'assets/images/career4.jpg', titleKey: 'slide10.title', descKey: 'slide10.desc' },
    { image: 'assets/images/career3.jpg', titleKey: 'slide11.title', descKey: 'slide11.desc' },
    { image: 'assets/images/property-slide-12.png', titleKey: 'slide12.title', descKey: 'slide12.desc' },
    { image: 'assets/images/property-slide-05.png', titleKey: 'slide05.title', descKey: 'slide05.desc' },
    { image: 'assets/images/property-slide-06.png', titleKey: 'slide06.title', descKey: 'slide06.desc' },
    { image: 'assets/images/property-slide-07.png', titleKey: 'slide07.title', descKey: 'slide07.desc' },
    { image: 'assets/images/property-slide-08.png', titleKey: 'slide08.title', descKey: 'slide08.desc' }
  ];

  // ⚡ បញ្ជីអចលនទ្រព្យដែលពាក់ព័ន្ធនឹងផ្នែកអាជីពការងារ ដោយប្រើប្រាស់ Translation Keys ថ្មី (career.*)
  readonly career = [
    {
      id: 1,
      titleKey: 'career.id1.title',
      image: 'assets/images/career1.jpg',
      typeKey: 'career.type.villa',
      size: '320-480 sqm',
      purposeKey: 'career.purpose.family',
      descriptionKey: 'career.id1.desc'
    },
    {
      id: 2,
      titleKey: 'career.id2.title',
      image: 'assets/images/career2.jpg',
      typeKey: 'career.type.residence',
      size: '220-300 sqm',
      purposeKey: 'career.purpose.primary',
      descriptionKey: 'career.id2.desc'
    },
    {
      id: 3,
      titleKey: 'career.id3.title',
      image: 'assets/images/career3.jpg',
      typeKey: 'career.type.shophouse',
      size: '180-260 sqm',
      purposeKey: 'career.purpose.investment',
      descriptionKey: 'career.id3.desc'
    },
    {
      id: 4,
      titleKey: 'career.id4.title',
      image: 'assets/images/career4.jpg',
      typeKey: 'career.type.shophouse',
      size: '180-260 sqm',
      purposeKey: 'career.purpose.investment',
      descriptionKey: 'career.id4.desc'
    },
    {
      id: 5,
      titleKey: 'career.id5.title',
      image: 'assets/images/career5.jpg',
      typeKey: 'career.type.shophouse',
      size: '180-260 sqm',
      purposeKey: 'career.purpose.investment',
      descriptionKey: 'career.id5.desc'
    },
    {
      id: 6,
      titleKey: 'career.id6.title',
      image: 'assets/images/career6.jpg',
      typeKey: 'career.type.shophouse',
      size: '180-260 sqm',
      purposeKey: 'career.purpose.investment',
      descriptionKey: 'career.id6.desc'
    },
    { 
      id: 7,
      titleKey: 'career.id7.title',
      image: 'assets/images/career7.jpg',
      typeKey: 'career.type.shophouse',
      size: '180-260 sqm',
      purposeKey: 'career.purpose.investment',
      descriptionKey: 'career.id7.desc'
    },
    {
      id: 8,
      titleKey: 'career.id8.title',
      image: 'assets/images/career8.jpg',
      typeKey: 'career.type.shophouse',
      size: '180-260 sqm',
      purposeKey: 'career.purpose.investment',
      descriptionKey: 'career.id8.desc'
    },
    {
      id: 9,
      titleKey: 'career.id9.title',
      image: 'assets/images/career9.jpg',
      typeKey: 'career.type.shophouse',
      size: '180-260 sqm',
      purposeKey: 'career.purpose.investment',
      descriptionKey: 'career.id9.desc'
    },
    {
      id: 10,
      titleKey: 'career.id10.title',
      image: 'assets/images/career10.jpg',
      typeKey: 'career.type.shophouse',
      size: '180-260 sqm',
      purposeKey: 'career.purpose.investment',
      descriptionKey: 'career.id10.desc'
    },
    {
      id: 11,
      titleKey: 'career.id11.title',
      image: 'assets/images/career11.jpg',
      typeKey: 'career.type.shophouse',
      size: '180-260 sqm',
      purposeKey: 'career.purpose.investment',
      descriptionKey: 'career.id11.desc'
    },
    {
      id: 12,
      titleKey: 'career.id12.title',
      image: 'assets/images/career12.jpg',
      typeKey: 'career.type.shophouse',
      size: '180-260 sqm',
      purposeKey: 'career.purpose.investment',
      descriptionKey: 'career.id12.desc'
    }
  ];

  get currentSlide() {
    return this.slides[this.currentSlideIndex];
  }

  ngOnInit(): void {
    this.startSlideShow();
  }

  ngOnDestroy(): void {
    this.stopSlideShow();
  }

  goToSlide(index: number): void {
    this.currentSlideIndex = index;
    this.restartSlideShow();
  }

  nextSlide(): void {
    this.currentSlideIndex = (this.currentSlideIndex + 1) % this.slides.length;
  }

  previousSlide(): void {
    this.currentSlideIndex = (this.currentSlideIndex - 1 + this.slides.length) % this.slides.length;
    this.restartSlideShow();
  }

  nextSlideFromControl(): void {
    this.nextSlide();
    this.restartSlideShow();
  }

  private startSlideShow(): void {
    this.slideIntervalId = setInterval(() => {
      this.nextSlide();
    }, 4000);
  }

  private stopSlideShow(): void {
    if (this.slideIntervalId) {
      clearInterval(this.slideIntervalId);
      this.slideIntervalId = undefined;
    }
  }

  private restartSlideShow(): void {
    this.stopSlideShow();
    this.startSlideShow();
  }
}