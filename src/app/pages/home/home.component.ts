import { Component, OnInit, OnDestroy, inject } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { LanguageService } from '../../core/services/language.service'; // ⚡ ផ្ទៀងផ្ទាត់ផ្លូវទៅកាន់ Service របស់ Phanit ឱ្យត្រូវ

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  // ⚡ Inject Language Service ចូលសម្រាប់ហៅប្រើលើ HTML
  langService = inject(LanguageService);

  currentSlideIndex = 0;
  private slideIntervalId?: ReturnType<typeof setInterval>;
  safeVideoUrl!: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {}

  // ⚡ ប្តូរអត្ថបទជាភាសាអង់គ្លេសមកជា Keys សម្រាប់យកទៅបកប្រែ
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

  readonly stats = [
    { value: '12+', labelKey: 'stats.years' },
    { value: '350+', labelKey: 'stats.families' },
    { value: '24/7', labelKey: 'stats.security' }
  ];

  readonly highlights = [
    'hl.1',
    'hl.2',
    'hl.3',
    'hl.4'
  ];

  readonly propertyTypes = [
    {
      titleKey: 'home.luxuryTitle',
      image: 'assets/images/borey-vimean-bg.jpg',
      typeKey: 'home.luxuryType',
      size: '320-480 sqm',
      purposeKey: 'home.luxuryPurpose',
      descriptionKey: 'home.luxuryDesc',
      rating: 5,          
      isFavorite: true
    },
    {
      titleKey: 'home.modernTitle',
      image: 'assets/images/property_list1.jpg',
      typeKey: 'home.modernType',
      size: '220-300 sqm',
      purposeKey: 'home.modernPurpose',
      descriptionKey: 'home.modernDesc',
      rating: 5,           
      isFavorite: true
    },
    // រាល់ប្រភេទផ្ទះ Shophouse ទាំងអស់គឺប្រើ Key រួមគ្នាដើម្បីកុំឱ្យជាន់កូដច្រើនដង
    {
      titleKey: 'home.shopTitle',
      image: 'assets/images/house3.jpg',
      typeKey: 'home.shopType',
      size: '180-260 sqm',
      purposeKey: 'home.shopPurpose',
      descriptionKey: 'home.shopDesc',
      rating: 5,          
      isFavorite: true
    },
    {
      titleKey: 'home.shopTitle',
      image: 'assets/images/property_list.jpg',
      typeKey: 'home.shopType',
      size: '180-260 sqm',
      purposeKey: 'home.shopPurpose',
      descriptionKey: 'home.shopDesc',
      rating: 5,          
      isFavorite: true
    },
    {
      titleKey: 'home.shopTitle',
      image: 'assets/images/property_list2.jpg',
      typeKey: 'home.shopType',
      size: '180-260 sqm',
      purposeKey: 'home.shopPurpose',
      descriptionKey: 'home.shopDesc',
      rating: 5,          
      isFavorite: true
    },
    {
      titleKey: 'home.shopTitle',
      image: 'assets/images/property_list3.jpg',
      typeKey: 'home.shopType',
      size: '180-260 sqm',
      purposeKey: 'home.shopPurpose',
      descriptionKey: 'home.shopDesc',
      rating: 5,          
      isFavorite: true
    },
    {
      titleKey: 'home.shopTitle',
      image: 'assets/images/property_list4.jpg',
      typeKey: 'home.shopType',
      size: '180-260 sqm',
      purposeKey: 'home.shopPurpose',
      descriptionKey: 'prop.shopDesc',
      rating: 5,          
      isFavorite: true
    },
    {
      titleKey: 'home.shopTitle',
      image: 'assets/images/property_list5.jpg',
      typeKey: 'home.shopType',
      size: '180-260 sqm',
      purposeKey: 'home.shopPurpose',
      descriptionKey: 'home.shopDesc',
      rating: 5,          
      isFavorite: true
    },
    {
      titleKey: 'home.shopTitle',
      image: 'assets/images/property_list6.jpg',
      typeKey: 'home.shopType',
      size: '180-260 sqm',
      purposeKey: 'home.shopPurpose',
      descriptionKey: 'home.shopDesc',
      rating: 5,          
      isFavorite: true   
    },
    {
      titleKey: 'home.shopTitle',
      image: 'assets/images/property_list7.jpg',
      typeKey: 'home.shopType',
      size: '180-260 sqm',
      purposeKey: 'home.shopPurpose',
      descriptionKey: 'home.shopDesc',
      rating: 5,          
      isFavorite: true
    },
    {
      titleKey: 'home.shopTitle',
      image: 'assets/images/property_list8.jpg',
      typeKey: 'home.shopType',
      size: '180-260 sqm',
      purposeKey: 'home.shopPurpose',
      descriptionKey: 'home.shopDesc',
      rating: 5,          
      isFavorite: true
    },
    {
      titleKey: 'home.shopTitle',
      image: 'assets/images/property_list9.jpg',
      typeKey: 'home.shopType',
      size: '180-260 sqm',
      purposeKey: 'home.shopPurpose',
      descriptionKey: 'home.shopDesc',
      rating: 5,          
      isFavorite: true
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