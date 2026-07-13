import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


export interface Property {
  id: number;
  title: string;
  price: string;
  location: string;
  bedrooms: number;
  bathrooms: number;
  sizeSqft: number;
  description: string;
  mainImageUrl: string;
}

@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.scss']
})
export class PropertyDetailComponent implements OnInit {
  property: Property | undefined;


  private mockProperties: Property[] = [
    {
      id: 1,
      title: 'Luxury Queen Villa',
      price: '$420,000',
      location: 'គម្រោងទី៦ ផ្លូវឯកឧត្តមជាសុផារ៉ា',
      bedrooms: 5,
      bathrooms: 6,
      sizeSqft: 380,
      description: 'វីឡាមហាក្សត្រិយានីដ៏ប្រណីត មានទីធ្លាធំទូលាយ សំណង់រឹងមាំ និងម៉ូដទាន់សម័យបំផុត សាកសមសម្រាប់គ្រួសារលំដាប់អភិជន។',
      mainImageUrl: '~src/assets/images/new-building-01.png' 
    },
    {
      id: 2,
      title: 'Twin Villa Twin-A',
      price: '$210,000',
      location: 'គម្រោងវីមានភ្នំពេញ ផ្លូវជាតិលេខ៦A',
      bedrooms: 4,
      bathrooms: 5,
      sizeSqft: 220,
      description: 'វីឡាកូនកាត់ប្រណីត រចនាឡើងយ៉ាងសម្រិតសម្រាំង សាកសមបំផុតសម្រាប់គ្រួសារទាន់សម័យ ផ្តល់ជូននូវផាសុកភាពខ្ពស់ និងសុវត្ថិភាព។',
      mainImageUrl: '~src/assets/images/new-building-01.png'
    }
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {

    const propertyId = Number(this.route.snapshot.paramMap.get('id'));
    

    this.property = this.mockProperties.find(item => item.id === propertyId);
  }
}
