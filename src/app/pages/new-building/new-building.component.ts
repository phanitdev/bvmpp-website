import { Component } from '@angular/core';

@Component({
  selector: 'app-new-building',
  templateUrl: './new-building.component.html',
  styleUrls: ['./new-building.component.scss']
})
export class NewBuildingComponent {
  readonly images = [
    {
      src: 'assets/images/new-building-01.png',
      title: 'New building progress overview',
      description: 'Current construction progress across the latest villa and residential expansion area.'
    },
    {
      src: 'assets/images/new-building-02.png',
      title: 'Structural construction detail',
      description: 'Close-up view of the reinforced structure and masonry work underway in the new phase.'
    },
    {
      src: 'assets/images/new-building-03.png',
      title: 'Aerial project update',
      description: 'High-level look at the new development area alongside completed Borey Vimean homes.'
    },
    {
      src: 'assets/images/new-building-04.png',
      title: 'Villa facade progress',
      description: 'Front elevation construction for a premium villa design inside the new building zone.'
    },
    {
      src: 'assets/images/new-building-05.png',
      title: 'Main frontage construction',
      description: 'Detailed front-facing progress image showing scale, layout, and finishing preparation.'
    },
    {
      src: 'assets/images/new-building-06.png',
      title: 'Neighborhood expansion view',
      description: 'The new building area positioned within the wider community road network and completed homes.'
    },
    {
      src: 'assets/images/new-building-07.png',
      title: 'Site progress perspective',
      description: 'Additional overview of ongoing construction activity and project staging on site.'
    }
  ];
}
