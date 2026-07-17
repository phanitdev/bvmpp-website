import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { LanguageService } from '../../core/services/language.service'; // ⚡ ផ្ទៀងផ្ទាត់ផ្លូវទៅកាន់ Service ឱ្យត្រូវ

@Component({
  selector: 'app-new-promotion',
  templateUrl: './new-promotion.component.html',
  styleUrls: ['./new-promotion.component.scss']
})
export class NewPromotionComponent implements OnInit, OnDestroy {
  // ⚡ Inject Language Service សម្រាប់ប្រើប្រាស់ប្តូរភាសា
  langService = inject(LanguageService);

  currentSlideIndex = 0;
  private slideIntervalId?: ReturnType<typeof setInterval>;

  // ⚡ បញ្ជីស្លាយប្រើប្រាស់ Keys រួមគ្នាដើម្បីងាយស្រួលគ្រប់គ្រង
  readonly slides = [
    { image: 'assets/images/property-slide-09.png', titleKey: 'slide09.title', descKey: 'slide09.desc' },
    { image: 'assets/images/property-slide-10.png', titleKey: 'slide10.title', descKey: 'slide10.desc' },
    { image: 'assets/images/property-slide-11.png', titleKey: 'slide11.title', descKey: 'slide11.desc' },
    { image: 'assets/images/property-slide-12.png', titleKey: 'slide12.title', descKey: 'slide12.desc' },
    { image: 'assets/images/property-slide-05.png', titleKey: 'slide05.title', descKey: 'slide05.desc' },
    { image: 'assets/images/property-slide-06.png', titleKey: 'slide06.title', descKey: 'slide06.desc' },
    { image: 'assets/images/property-slide-07.png', titleKey: 'slide07.title', descKey: 'slide07.desc' },
    { image: 'assets/images/property-slide-08.png', titleKey: 'slide08.title', descKey: 'slide08.desc' }
  ];

  // ⚡ បញ្ជី New Promotion ដែលបានភ្ជាប់ទៅនឹង Translation Keys តាម ID នីមួយៗ
  readonly newPromotion = [
    {
      id: 1,
      titleKey: 'promotion.id1.title',
      image: 'assets/images/new-promotion1.jpg',
      typeKey: 'promotion.type.villa',
      size: '320-480 sqm',
      purposeKey: 'promotion.purpose.family',
      descriptionKey: 'promotion.id1.desc'
    },
    {
      id: 2,
      titleKey: 'promotion.id2.title',
      image: 'assets/images/new-promotion2.jpg',
      typeKey: 'promotion.type.residence',
      size: '220-300 sqm',
      purposeKey: 'promotion.purpose.primary',
      descriptionKey: 'promotion.id2.desc'
    },
    {
      id: 3,
      titleKey: 'promotion.id3.title',
      image: 'assets/images/new-promotion3.jpg',
      typeKey: 'promotion.type.shophouse',
      size: '180-260 sqm',
      purposeKey: 'promotion.purpose.investment',
      descriptionKey: 'promotion.id3.desc'
    },
    {
      id: 4,
      titleKey: 'promotion.id4.title',
      image: 'assets/images/new-promotion4.jpg',
      typeKey: 'promotion.type.shophouse',
      size: '180-260 sqm',
      purposeKey: 'promotion.purpose.investment',
      descriptionKey: 'promotion.id4.desc'
    },
    {
      id: 5,
      titleKey: 'promotion.id5.title',
      image: 'assets/images/new-promotion5.jpg',
      typeKey: 'promotion.type.shophouse',
      size: '180-260 sqm',
      purposeKey: 'promotion.purpose.investment',
      descriptionKey: 'promotion.id5.desc'
    },
    {
      id: 6,
      titleKey: 'promotion.id6.title',
      image: 'assets/images/new-promotion6.jpg',
      typeKey: 'promotion.type.shophouse',
      size: '180-260 sqm',
      purposeKey: 'promotion.purpose.investment',
      descriptionKey: 'promotion.id6.desc'
    },
    { 
      id: 7,
      titleKey: 'promotion.id7.title',
      image: 'assets/images/property_list4.jpg',
      typeKey: 'promotion.type.shophouse',
      size: '180-260 sqm',
      purposeKey: 'promotion.purpose.investment',
      descriptionKey: 'promotion.id7.desc'
    },
    {
      id: 8,
      titleKey: 'promotion.id8.title',
      image: 'assets/images/property_list5.jpg',
      typeKey: 'promotion.type.shophouse',
      size: '180-260 sqm',
      purposeKey: 'promotion.purpose.investment',
      descriptionKey: 'promotion.id8.desc'
    },
    {
      id: 9,
      titleKey: 'promotion.id9.title',
      image: 'assets/images/property_list6.jpg',
      typeKey: 'promotion.type.shophouse',
      size: '180-260 sqm',
      purposeKey: 'promotion.purpose.investment',
      descriptionKey: 'prop.id9.desc'
    },
    {
      id: 10,
      titleKey: 'promotion.id10.title',
      image: 'assets/images/property_list7.jpg',
      typeKey: 'promotion.type.shophouse',
      size: '180-260 sqm',
      purposeKey: 'promotion.purpose.investment',
      descriptionKey: 'promotion.id10.desc'
    },
    {
      id: 11,
      titleKey: 'promotion.id11.title',
      image: 'assets/images/property_list8.jpg',
      typeKey: 'promotion.type.shophouse',
      size: '180-260 sqm',
      purposeKey: 'promotion.purpose.investment',
      descriptionKey: 'promotion.id11.desc'
    },
    {
      id: 12,
      titleKey: 'promotion.id12.title',
      image: 'assets/images/property_list9.jpg',
      typeKey: 'promotion.type.shophouse',
      size: '180-260 sqm',
      purposeKey: 'promotion.purpose.investment',
      descriptionKey: 'promotion.id12.desc'
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