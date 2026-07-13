import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  currentSlideIndex = 0;
  private slideIntervalId?: ReturnType<typeof setInterval>;

  safeVideoUrl!: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {}

  // ngOnInit(): void {
  //   const rawUrl = 'https://drive.google.com/uc?export=download&id=1xDhV5QbTJ0h7PaHI-YwC691j1wNfag5w';
    
  //   // ប្រាប់ Angular ថា លីងនេះមានសុវត្ថិភាព មិនបាច់ Block ទេ
  //   this.safeVideoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(rawUrl);
  // }

    readonly slides = [
    {
      image: 'assets/images/property-slide-09.png',
      title: 'Festive community highlights',
      description: 'Celebrate project updates, community moments, and seasonal promotions across Borey Vimean Phnom Penh.'
    },
    {
      image: 'assets/images/property-slide-10.png',
      title: 'North Land commercial showcase',
      description: 'Featured commercial building presentation with polished architecture and project identity.'
    },
    {
      image: 'assets/images/property-slide-11.png',
      title: 'Special event announcement',
      description: 'Promotional and ceremonial campaign artwork presented as part of the property showcase.'
    },
    {
      image: 'assets/images/property-slide-12.png',
      title: 'Customer appreciation feature',
      description: 'A branded event slide highlighting project engagement and important dates.'
    },
    {
      image: 'assets/images/property-slide-05.png',
      title: 'Project promotion campaign',
      description: 'Marketing artwork featuring current project offers, rewards, and featured property collections.'
    },
    {
      image: 'assets/images/property-slide-06.png',
      title: 'Commercial boulevard view',
      description: 'North Land shophouse and commercial building frontage along the main project road.'
    },
    {
      image: 'assets/images/property-slide-07.png',
      title: 'Completed shophouse perspective',
      description: 'Street-level view of finished commercial rows and the walkable business environment.'
    },
    {
      image: 'assets/images/property-slide-08.png',
      title: 'Ruby Villa feature',
      description: 'A featured residential villa poster showing one of the premium home styles in the development.'
    }
  ];

  readonly stats = [
    { value: '12+', label: 'Years of community development' },
    { value: '350+', label: 'Families living with confidence' },
    { value: '24/7', label: 'Security and gated access' }
  ];

  readonly highlights = [
    'Elegant villa and modern shophouse options',
    'Wide roads, landscaped parks, and family recreation space',
    'Fast access to schools, retail, and main city routes',
    'Trusted sales support from consultation to handover'
  ];

  readonly propertyTypes = [
 {
      title: 'Luxury Villa Collection',
      image: 'assets/images/borey-vimean-bg.jpg',
      type: 'Villa',
      size: '320-480 sqm',
      purpose: 'Family ownership',
      description: 'Signature villas with generous floor area, elegant facades, and a layout that supports premium family living.',
      rating: 5,           // ចំនួនផ្កាយ (ឧទាហរណ៍៖ 5 ផ្កាយ)
      isFavorite: true
    },
    {
      title: 'Modern Urban Residence',
      image: 'assets/images/property_list1.jpg',
      type: 'Residence',
      size: '220-300 sqm',
      purpose: 'Primary home',
      description: 'A balanced choice for buyers who want a contemporary home with practical room flow and clean curb appeal.',
      rating: 5,           // ចំនួនផ្កាយ (ឧទាហរណ៍៖ 5 ផ្កាយ)
      isFavorite: true
    },
    {
      title: 'Commercial Shophouse',
      image: 'assets/images/house3.jpg',
      type: 'Shophouse',
      size: '180-260 sqm',
      purpose: 'Retail and investment',
      description: 'Built for storefront presence, office usage, or rental strategy within an established residential setting.',
      rating: 5,           // ចំនួនផ្កាយ (ឧទាហរណ៍៖ 5 ផ្កាយ)
      isFavorite: true
    },
    {
      title: 'Commercial Shophouse',
      image: 'assets/images/property_list.jpg',
      type: 'Shophouse',
      size: '180-260 sqm',
      purpose: 'Retail and investment',
      description: 'Built for storefront presence, office usage, or rental strategy within an established residential setting.',
      rating: 5,           // ចំនួនផ្កាយ (ឧទាហរណ៍៖ 5 ផ្កាយ)
      isFavorite: true
    },
    {
      title: 'Commercial Shophouse',
      image: 'assets/images/property_list2.jpg',
      type: 'Shophouse',
      size: '180-260 sqm',
      purpose: 'Retail and investment',
      description: 'Built for storefront presence, office usage, or rental strategy within an established residential setting.',
      rating: 5,           // ចំនួនផ្កាយ (ឧទាហរណ៍៖ 5 ផ្កាយ)
      isFavorite: true
    },
        {
      title: 'Commercial Shophouse',
      image: 'assets/images/property_list3.jpg',
      type: 'Shophouse',
      size: '180-260 sqm',
      purpose: 'Retail and investment',
      description: 'Built for storefront presence, office usage, or rental strategy within an established residential setting.',
      rating: 5,           // ចំនួនផ្កាយ (ឧទាហរណ៍៖ 5 ផ្កាយ)
      isFavorite: true
    },
        {
      title: 'Commercial Shophouse',
      image: 'assets/images/property_list4.jpg',
      type: 'Shophouse',
      size: '180-260 sqm',
      purpose: 'Retail and investment',
      description: 'Built for storefront presence, office usage, or rental strategy within an established residential setting.',
      rating: 5,           // ចំនួនផ្កាយ (ឧទាហរណ៍៖ 5 ផ្កាយ)
      isFavorite: true
    },
        {
      title: 'Commercial Shophouse',
      image: 'assets/images/property_list5.jpg',
      type: 'Shophouse',
      size: '180-260 sqm',
      purpose: 'Retail and investment',
      description: 'Built for storefront presence, office usage, or rental strategy within an established residential setting.',
      rating: 5,           // ចំនួនផ្កាយ (ឧទាហរណ៍៖ 5 ផ្កាយ)
      isFavorite: true
    },
        {
      title: 'Commercial Shophouse',
      image: 'assets/images/property_list6.jpg',
      type: 'Shophouse',
      size: '180-260 sqm',
      purpose: 'Retail and investment',
      description: 'Built for storefront presence, office usage, or rental strategy within an established residential setting.',
       rating: 5,           // ចំនួនផ្កាយ (ឧទាហរណ៍៖ 5 ផ្កាយ)
      isFavorite: true  
          
    
    },
        {
      title: 'Commercial Shophouse',
      image: 'assets/images/property_list7.jpg',
      type: 'Shophouse',
      size: '180-260 sqm',
      purpose: 'Retail and investment',
      description: 'Built for storefront presence, office usage, or rental strategy within an established residential setting.',
      rating: 5,           // ចំនួនផ្កាយ (ឧទាហរណ៍៖ 5 ផ្កាយ)
      isFavorite: true
    },
        {
      title: 'Commercial Shophouse',
      image: 'assets/images/property_list8.jpg',
      type: 'Shophouse',
      size: '180-260 sqm',
      purpose: 'Retail and investment',
      description: 'Built for storefront presence, office usage, or rental strategy within an established residential setting.',
      rating: 5,           // ចំនួនផ្កាយ (ឧទាហរណ៍៖ 5 ផ្កាយ)
      isFavorite: true
    },
            {
      title: 'Commercial Shophouse',
      image: 'assets/images/property_list9.jpg',
      type: 'Shophouse',
      size: '180-260 sqm',
      purpose: 'Retail and investment',
      description: 'Built for storefront presence, office usage, or rental strategy within an established residential setting.',
      rating: 5,           // ចំនួនផ្កាយ (ឧទាហរណ៍៖ 5 ផ្កាយ)
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
