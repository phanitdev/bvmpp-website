import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.scss']
})
export class CareerComponent implements OnInit, OnDestroy {
  currentSlideIndex = 0;
  private slideIntervalId?: ReturnType<typeof setInterval>;

  readonly slides = [
    {
      image: 'assets/images/career1.jpg',
      title: 'Festive community highlights',
      description: 'Celebrate project updates, community moments, and seasonal promotions across Borey Vimean Phnom Penh.'
    },
    {
      image: 'assets/images/career4.jpg',
      title: 'North Land commercial showcase',
      description: 'Featured commercial building presentation with polished architecture and project identity.'
    },
    {
      image: 'assets/images/career3.jpg',
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

  readonly newPromotion = [
    {
      title: 'Luxury Villa Collection',
      image: 'assets/images/career1.jpg',
      type: 'Villa',
      size: '320-480 sqm',
      purpose: 'Family ownership',
      description: 'Signature villas with generous floor area, elegant facades, and a layout that supports premium family living.'
    },
    {
      title: 'Modern Urban Residence',
      image: 'assets/images/career2.jpg',
      type: 'Residence',
      size: '220-300 sqm',
      purpose: 'Primary home',
      description: 'A balanced choice for buyers who want a contemporary home with practical room flow and clean curb appeal.'
    },
    {
      title: 'Commercial Shophouse',
      image: 'assets/images/career3.jpg',
      type: 'Shophouse',
      size: '180-260 sqm',
      purpose: 'Retail and investment',
      description: 'Built for storefront presence, office usage, or rental strategy within an established residential setting.'
    },
    {
      title: 'Commercial Shophouse',
      image: 'assets/images/career4.jpg',
      type: 'Shophouse',
      size: '180-260 sqm',
      purpose: 'Retail and investment',
      description: 'Built for storefront presence, office usage, or rental strategy within an established residential setting.'
    },
    {
      title: 'Commercial Shophouse',
      image: 'assets/images/career5.jpg',
      type: 'Shophouse',
      size: '180-260 sqm',
      purpose: 'Retail and investment',
      description: 'Built for storefront presence, office usage, or rental strategy within an established residential setting.'
    },
        {
      title: 'Commercial Shophouse',
      image: 'assets/images/career6.jpg',
      type: 'Shophouse',
      size: '180-260 sqm',
      purpose: 'Retail and investment',
      description: 'Built for storefront presence, office usage, or rental strategy within an established residential setting.'
    },
        {
      title: 'Commercial Shophouse',
      image: 'assets/images/career7.jpg',
      type: 'Shophouse',
      size: '180-260 sqm',
      purpose: 'Retail and investment',
      description: 'Built for storefront presence, office usage, or rental strategy within an established residential setting.'
    },
        {
      title: 'Commercial Shophouse',
      image: 'assets/images/career8.jpg',
      type: 'Shophouse',
      size: '180-260 sqm',
      purpose: 'Retail and investment',
      description: 'Built for storefront presence, office usage, or rental strategy within an established residential setting.'
    },
        {
      title: 'Commercial Shophouse',
      image: 'assets/images/career9.jpg',
      type: 'Shophouse',
      size: '180-260 sqm',
      purpose: 'Retail and investment',
      description: 'Built for storefront presence, office usage, or rental strategy within an established residential setting.'
    },
        {
      title: 'Commercial Shophouse',
      image: 'assets/images/career10.jpg',
      type: 'Shophouse',
      size: '180-260 sqm',
      purpose: 'Retail and investment',
      description: 'Built for storefront presence, office usage, or rental strategy within an established residential setting.'
    },
        {
      title: 'Commercial Shophouse',
      image: 'assets/images/career11.jpg',
      type: 'Shophouse',
      size: '180-260 sqm',
      purpose: 'Retail and investment',
      description: 'Built for storefront presence, office usage, or rental strategy within an established residential setting.'
    },
            {
      title: 'Commercial Shophouse',
      image: 'assets/images/career12.jpg',
      type: 'Shophouse',
      size: '180-260 sqm',
      purpose: 'Retail and investment',
      description: 'Built for storefront presence, office usage, or rental strategy within an established residential setting.'
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
