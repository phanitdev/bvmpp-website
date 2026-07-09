import { Component, OnDestroy, OnInit } from '@angular/core';

interface SlideItem {
  image: string;
  title: string;
  description: string;
}

interface PromotionItem {
  title: string;
  image: string;
  type: string;
  size: string;
  purpose: string;
  description: string;
}

@Component({
  selector: 'app-promotion',
  templateUrl: './promotion.component.html',
  styleUrls: ['./promotion.component.scss']
})
export class PromotionComponent implements OnInit, OnDestroy {
  currentSlideIndex = 0;  
  modalHeadingTitle: string = '';
  modalSubheading: string = '';
  activeModalVideoSrc: string | null = null; // Tracks open modal source
  private slideIntervalId?: ReturnType<typeof setInterval>;


  readonly slides: SlideItem[] = [
    { image: 'assets/images/property-slide-09.png', title: 'Festive community highlights', description: 'Celebrate project updates, community moments, and seasonal promotions across Borey Vimean Phnom Penh.' },
    { image: 'assets/images/property-slide-10.png', title: 'North Land commercial showcase', description: 'Featured commercial building presentation with polished architecture and project identity.' },
    { image: 'assets/images/property-slide-11.png', title: 'Special event announcement', description: 'Promotional and ceremonial campaign artwork presented as part of the property showcase.' },
    { image: 'assets/images/property-slide-12.png', title: 'Customer appreciation feature', description: 'A branded event slide highlighting project engagement and important dates.' },
    { image: 'assets/images/property-slide-05.png', title: 'Project promotion campaign', description: 'Marketing artwork featuring current project offers, rewards, and featured property collections.' },
    { image: 'assets/images/property-slide-06.png', title: 'Commercial boulevard view', description: 'North Land shophouse and commercial building frontage along the main project road.' },
    { image: 'assets/images/property-slide-07.png', title: 'Completed shophouse perspective', description: 'Street-level view of finished commercial rows and the walkable business environment.' },
    { image: 'assets/images/property-slide-08.png', title: 'Ruby Villa feature', description: 'A featured residential villa poster showing one of the premium home styles in the development.' }
  ];

  readonly promotionlist: PromotionItem[] = [
    { title: 'Luxury Villa Collection', image: 'assets/videos/promotion1.mp4', type: 'Villa', size: '320-480 sqm', purpose: 'Family ownership', description: 'Signature villas with generous floor area, elegant facades, and a layout that supports premium family living.' },
    { title: 'Modern Urban Residence', image: 'assets/videos/promotion2.mp4', type: 'Residence', size: '220-300 sqm', purpose: 'Primary home', description: 'A balanced choice for buyers who want a contemporary home with practical room flow and clean curb appeal.' },
    { title: 'Commercial Shophouse', image: 'assets/videos/promotion3.mp4', type: 'Shophouse', size: '180-260 sqm', purpose: 'Retail and investment', description: 'Built for storefront presence, office usage, or rental strategy within an established residential setting.' },
    { title: 'Commercial Shophouse', image: 'assets/videos/promotion4.mp4', type: 'Shophouse', size: '180-260 sqm', purpose: 'Retail and investment', description: 'Built for storefront presence, office usage, or rental strategy within an established residential setting.' },
    { title: 'Commercial Shophouse', image: 'assets/videos/promotion5.mp4', type: 'Shophouse', size: '180-260 sqm', purpose: 'Retail and investment', description: 'Built for storefront presence, office usage, or rental strategy within an established residential setting.' },
    { title: 'Commercial Shophouse', image: 'assets/videos/promotion6.mp4', type: 'Shophouse', size: '180-260 sqm', purpose: 'Retail and investment', description: 'Built for storefront presence, office usage, or rental strategy within an established residential setting.' },
    { title: 'Commercial Shophouse', image: 'assets/videos/promotion7.mp4', type: 'Shophouse', size: '180-260 sqm', purpose: 'Retail and investment', description: 'Built for storefront presence, office usage, or rental strategy within an established residential setting.' },
    { title: 'Commercial Shophouse', image: 'assets/videos/promotion8.mp4', type: 'Shophouse', size: '180-260 sqm', purpose: 'Retail and investment', description: 'Built for storefront presence, office usage, or rental strategy within an established residential setting.' },
    { title: 'Commercial Shophouse', image: 'assets/videos/promotion9.mp4', type: 'Shophouse', size: '180-260 sqm', purpose: 'Retail and investment', description: 'Built for storefront presence, office usage, or rental strategy within an established residential setting.' },
    { title: 'Commercial Shophouse', image: 'assets/videos/promotion10.mp4', type: 'Shophouse', size: '180-260 sqm', purpose: 'Retail and investment', description: 'Built for storefront presence, office usage, or rental strategy within an established residential setting.' },
    { title: 'Commercial Shophouse', image: 'assets/videos/promotion11.mp4', type: 'Shophouse', size: '180-260 sqm', purpose: 'Retail and investment', description: 'Built for storefront presence, office usage, or rental strategy within an established residential setting.' },
    { title: 'Commercial Shophouse', image: 'assets/videos/promotion12.mp4', type: 'Shophouse', size: '180-260 sqm', purpose: 'Retail and investment', description: 'Built for storefront presence, office usage, or rental strategy within an established residential setting.' }
  ];

  get currentSlide(): SlideItem {
    return this.slides[this.currentSlideIndex];
  }

  ngOnInit(): void {
    this.startSlideShow();
  }

  ngOnDestroy(): void {
    this.stopSlideShow();
  }

  // MODAL LOGIC METHODS
openVideoModal(title: string, videoSrc: string, metaInfo: string): void {
    this.modalHeadingTitle = title;
    this.activeModalVideoSrc = videoSrc;
    this.modalSubheading = metaInfo;
    this.stopSlideShow(); // Pauses background slideshow smoothly
  }
closeVideoModal(): void {
    this.activeModalVideoSrc = null;
    this.modalHeadingTitle = '';
    this.modalSubheading = '';
    this.startSlideShow(); // Resumes slide rotation
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