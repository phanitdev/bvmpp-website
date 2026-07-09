import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
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
      description: 'Signature villas with generous floor area, elegant facades, and a layout that supports premium family living.'
    },
    {
      title: 'Modern Urban Residence',
      image: 'assets/images/property_list1.jpg',
      type: 'Residence',
      size: '220-300 sqm',
      purpose: 'Primary home',
      description: 'A balanced choice for buyers who want a contemporary home with practical room flow and clean curb appeal.'
    },
    {
      title: 'Commercial Shophouse',
      image: 'assets/images/house3.jpg',
      type: 'Shophouse',
      size: '180-260 sqm',
      purpose: 'Retail and investment',
      description: 'Built for storefront presence, office usage, or rental strategy within an established residential setting.'
    },
    {
      title: 'Commercial Shophouse',
      image: 'assets/images/property_list.jpg',
      type: 'Shophouse',
      size: '180-260 sqm',
      purpose: 'Retail and investment',
      description: 'Built for storefront presence, office usage, or rental strategy within an established residential setting.'
    },
    {
      title: 'Commercial Shophouse',
      image: 'assets/images/property_list2.jpg',
      type: 'Shophouse',
      size: '180-260 sqm',
      purpose: 'Retail and investment',
      description: 'Built for storefront presence, office usage, or rental strategy within an established residential setting.'
    },
        {
      title: 'Commercial Shophouse',
      image: 'assets/images/property_list3.jpg',
      type: 'Shophouse',
      size: '180-260 sqm',
      purpose: 'Retail and investment',
      description: 'Built for storefront presence, office usage, or rental strategy within an established residential setting.'
    },
        {
      title: 'Commercial Shophouse',
      image: 'assets/images/property_list4.jpg',
      type: 'Shophouse',
      size: '180-260 sqm',
      purpose: 'Retail and investment',
      description: 'Built for storefront presence, office usage, or rental strategy within an established residential setting.'
    },
        {
      title: 'Commercial Shophouse',
      image: 'assets/images/property_list5.jpg',
      type: 'Shophouse',
      size: '180-260 sqm',
      purpose: 'Retail and investment',
      description: 'Built for storefront presence, office usage, or rental strategy within an established residential setting.'
    },
        {
      title: 'Commercial Shophouse',
      image: 'assets/images/property_list6.jpg',
      type: 'Shophouse',
      size: '180-260 sqm',
      purpose: 'Retail and investment',
      description: 'Built for storefront presence, office usage, or rental strategy within an established residential setting.'
    },
        {
      title: 'Commercial Shophouse',
      image: 'assets/images/property_list7.jpg',
      type: 'Shophouse',
      size: '180-260 sqm',
      purpose: 'Retail and investment',
      description: 'Built for storefront presence, office usage, or rental strategy within an established residential setting.'
    },
        {
      title: 'Commercial Shophouse',
      image: 'assets/images/property_list8.jpg',
      type: 'Shophouse',
      size: '180-260 sqm',
      purpose: 'Retail and investment',
      description: 'Built for storefront presence, office usage, or rental strategy within an established residential setting.'
    },
            {
      title: 'Commercial Shophouse',
      image: 'assets/images/property_list9.jpg',
      type: 'Shophouse',
      size: '180-260 sqm',
      purpose: 'Retail and investment',
      description: 'Built for storefront presence, office usage, or rental strategy within an established residential setting.'
    }
  ];
}
