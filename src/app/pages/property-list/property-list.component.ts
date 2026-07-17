import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { LanguageService } from '../../core/services/language.service'; // ⚡ ផ្ទៀងផ្ទាត់ផ្លូវទៅកាន់ Service ឱ្យត្រូវ

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.scss']
})
export class PropertyListComponent implements OnInit, OnDestroy {
  // ⚡ Inject Language Service សម្រាប់ប្រើប្រាស់ប្តូរភាសានៅលើ HTML
  langService = inject(LanguageService);

  currentSlideIndex = 0;
  private slideIntervalId?: ReturnType<typeof setInterval>;

  // ⚡ បញ្ជីស្លាយប្រើប្រាស់ Keys ពី homeTranslations/propertiesTranslations
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

  // ⚡ បញ្ជីអចលនទ្រព្យដែលបានភ្ជាប់ទៅនឹង ID Keys ថ្មីៗ ងាយស្រួលកែប្រែទិន្នន័យ (Fix Data)
  readonly properties = [
    {
      id: 1,
      titleKey: 'prop.id1.title',
      image: 'assets/images/borey-vimean-bg.jpg',
      typeKey: 'prop.type.villa',
      size: '320-480 sqm',
      purposeKey: 'prop.purpose.family',
      descriptionKey: 'prop.id1.desc'
    },
    {
      id: 2,
      titleKey: 'prop.id2.title',
      image: 'assets/images/property_list1.jpg',
      typeKey: 'prop.type.residence',
      size: '220-300 sqm',
      purposeKey: 'prop.purpose.primary',
      descriptionKey: 'prop.id2.desc'
    },
    {
      id: 3,
      titleKey: 'prop.id3.title',
      image: 'assets/images/house3.jpg',
      typeKey: 'prop.type.shophouse',
      size: '180-260 sqm',
      purposeKey: 'prop.purpose.investment',
      descriptionKey: 'prop.id3.desc'
    },
    {
      id: 4,
      titleKey: 'prop.id4.title',
      image: 'assets/images/property_list.jpg',
      typeKey: 'prop.type.shophouse',
      size: '180-260 sqm',
      purposeKey: 'prop.purpose.investment',
      descriptionKey: 'prop.id4.desc'
    },
    {
      id: 5,
      titleKey: 'prop.id5.title',
      image: 'assets/images/property_list2.jpg',
      typeKey: 'prop.type.shophouse',
      size: '180-260 sqm',
      purposeKey: 'prop.purpose.investment',
      descriptionKey: 'prop.id5.desc'
    },
    {
      id: 6,
      titleKey: 'prop.id6.title',
      image: 'assets/images/property_list3.jpg',
      typeKey: 'prop.type.shophouse',
      size: '180-260 sqm',
      purposeKey: 'prop.purpose.investment',
      descriptionKey: 'prop.id6.desc'
    },
    { 
      id: 7,
      titleKey: 'prop.id7.title',
      image: 'assets/images/property_list4.jpg',
      typeKey: 'prop.type.shophouse',
      size: '180-260 sqm',
      purposeKey: 'prop.purpose.investment',
      descriptionKey: 'prop.id7.desc'
    },
    {
      id: 8,
      titleKey: 'prop.id8.title',
      image: 'assets/images/property_list5.jpg',
      typeKey: 'prop.type.shophouse',
      size: '180-260 sqm',
      purposeKey: 'prop.purpose.investment',
      descriptionKey: 'prop.id8.desc'
    },
    {
      id: 9,
      titleKey: 'prop.id9.title',
      image: 'assets/images/property_list6.jpg',
      typeKey: 'prop.type.shophouse',
      size: '180-260 sqm',
      purposeKey: 'prop.purpose.investment',
      descriptionKey: 'prop.id9.desc'
    },
    {
      id: 10,
      titleKey: 'prop.id10.title',
      image: 'assets/images/property_list7.jpg',
      typeKey: 'prop.type.shophouse',
      size: '180-260 sqm',
      purposeKey: 'prop.purpose.investment',
      descriptionKey: 'prop.id10.desc'
    },
    {
      id: 11,
      titleKey: 'prop.id11.title',
      image: 'assets/images/property_list8.jpg',
      typeKey: 'prop.type.shophouse',
      size: '180-260 sqm',
      purposeKey: 'prop.purpose.investment',
      descriptionKey: 'prop.id11.desc'
    },
    {
      id: 12,
      titleKey: 'prop.id12.title',
      image: 'assets/images/property_list9.jpg',
      typeKey: 'prop.type.shophouse',
      size: '180-260 sqm',
      purposeKey: 'prop.purpose.investment',
      descriptionKey: 'prop.id12.desc'
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