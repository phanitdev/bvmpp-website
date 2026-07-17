import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { LanguageService } from '../../core/services/language.service'; // ⚡ ផ្ទៀងផ្ទាត់ផ្លូវទៅកាន់ Service ឱ្យត្រូវ

@Component({
  selector: 'app-new-buildings',
  templateUrl: './new-buildings.component.html',
  styleUrls: ['./new-buildings.component.scss']
})
export class NewBuildingsComponent implements OnInit, OnDestroy {
  // ⚡ Inject Language Service សម្រាប់ប្រើប្រាស់ប្តូរភាសានៅលើ HTML
  langService = inject(LanguageService);

  currentSlideIndex = 0;
  private slideIntervalId?: ReturnType<typeof setInterval>;

  // ⚡ បញ្ជីស្លាយ (Slides) ប្តូរមកប្រើប្រាស់ Translation Keys (ប្រសិនបើមានរៀបចំក្នុង slide context)
  readonly slides = [
    {
      image: 'assets/images/property-slide-09.png',
      titleKey: 'slide09.title',
      descKey: 'slide09.desc'
    },
    {
      image: 'assets/images/property-slide-10.png',
      titleKey: 'slide10.title',
      descKey: 'slide10.desc'
    },
    {
      image: 'assets/images/property-slide-11.png',
      titleKey: 'slide11.title',
      descKey: 'slide11.desc'
    },
    {
      image: 'assets/images/property-slide-12.png',
      titleKey: 'slide12.title',
      descKey: 'slide12.desc'
    },
    {
      image: 'assets/images/property-slide-05.png',
      titleKey: 'slide05.title',
      descKey: 'slide05.desc'
    },
    {
      image: 'assets/images/property-slide-06.png',
      titleKey: 'slide06.title',
      descKey: 'slide06.desc'
    },
    {
      image: 'assets/images/property-slide-07.png',
      titleKey: 'slide07.title',
      descKey: 'slide07.desc'
    },
    {
      image: 'assets/images/property-slide-08.png',
      titleKey: 'slide08.title',
      descKey: 'slide08.desc'
    }
  ];

  // ⚡ បញ្ជីគម្រោងអគារថ្មីៗ ដោយប្រើប្រាស់ Translation Keys ចំៗតាម ID នីមួយៗ
  readonly newBuildings = [
    {
      id: 1,
      titleKey: 'building.id1.title',
      image: 'assets/images/new-building-01.png',
      typeKey: 'building.type.villa',
      size: '320-480 sqm',
      purposeKey: 'building.purpose.family',
      descriptionKey: 'building.id1.desc'
    },
    {
      id: 2,
      titleKey: 'building.id2.title',
      image: 'assets/images/new-building-02.png',
      typeKey: 'building.type.residence',
      size: '220-300 sqm',
      purposeKey: 'building.purpose.primary',
      descriptionKey: 'building.id2.desc'
    },
    {
      id: 3,
      titleKey: 'building.id3.title',
      image: 'assets/images/new-building-03.png',
      typeKey: 'building.type.shophouse',
      size: '180-260 sqm',
      purposeKey: 'building.purpose.investment',
      descriptionKey: 'building.id3.desc'
    },
    {
      id: 4,
      titleKey: 'building.id4.title',
      image: 'assets/images/new-building-04.png',
      typeKey: 'building.type.shophouse',
      size: '180-260 sqm',
      purposeKey: 'building.purpose.investment',
      descriptionKey: 'building.id4.desc'
    },
    {
      id: 5,
      titleKey: 'building.id5.title',
      image: 'assets/images/new-building-05.png',
      typeKey: 'building.type.shophouse',
      size: '180-260 sqm',
      purposeKey: 'building.purpose.investment',
      descriptionKey: 'building.id5.desc'
    },
    {
      id: 6,
      titleKey: 'building.id6.title',
      image: 'assets/images/new-building-06.png',
      typeKey: 'building.type.shophouse',
      size: '180-260 sqm',
      purposeKey: 'building.purpose.investment',
      descriptionKey: 'building.id6.desc'
    },
    {
      id: 7,
      titleKey: 'building.id7.title',
      image: 'assets/images/property_list4.jpg',
      typeKey: 'building.type.shophouse',
      size: '180-260 sqm',
      purposeKey: 'building.purpose.investment',
      descriptionKey: 'building.id7.desc'
    },
    {
      id: 8,
      titleKey: 'building.id8.title',
      image: 'assets/images/property_list5.jpg',
      typeKey: 'building.type.shophouse',
      size: '180-260 sqm',
      purposeKey: 'building.purpose.investment',
      descriptionKey: 'building.id8.desc'
    },
    {
      id: 9,
      titleKey: 'building.id9.title',
      image: 'assets/images/property_list6.jpg',
      typeKey: 'building.type.shophouse',
      size: '180-260 sqm',
      purposeKey: 'building.purpose.investment',
      descriptionKey: 'building.id9.desc'
    },
    {
      id: 10,
      titleKey: 'building.id10.title',
      image: 'assets/images/property_list7.jpg',
      typeKey: 'building.type.shophouse',
      size: '180-260 sqm',
      purposeKey: 'building.purpose.investment',
      descriptionKey: 'building.id10.desc'
    },
    {
      id: 11,
      titleKey: 'building.id11.title',
      image: 'assets/images/property_list8.jpg',
      typeKey: 'building.type.shophouse',
      size: '180-260 sqm',
      purposeKey: 'building.purpose.investment',
      descriptionKey: 'building.id11.desc'
    },
    {
      id: 12,
      titleKey: 'building.id12.title',
      image: 'assets/images/property_list9.jpg',
      typeKey: 'building.type.shophouse',
      size: '180-260 sqm',
      purposeKey: 'building.purpose.investment',
      descriptionKey: 'building.id12.desc'
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