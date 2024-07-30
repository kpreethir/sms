// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-home',
//   standalone: true,
//   imports: [],
//   templateUrl: './home.component.html',
//   styleUrl: './home.component.css'
// })
// export class HomeComponent {

// }


import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  CarouselComponent,
  CarouselControlComponent,
  CarouselIndicatorsComponent,
  CarouselInnerComponent,
  CarouselItemComponent,
  ThemeDirective,
  CardComponent,
  CardBodyComponent
} from '@coreui/angular';

import { CarouselModule } from 'primeng/carousel';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: true,
  imports: [ThemeDirective, CarouselComponent, CarouselIndicatorsComponent, CarouselInnerComponent, NgFor, CarouselItemComponent, CarouselControlComponent, RouterLink, CardComponent,CardBodyComponent]
})
export class HomeComponent{

  slides: any[] = new Array(3).fill({ id: -1, src: '', title: '', subtitle: '' });

  ngOnInit(): void {
    this.slides[0] = {
      src: 'https://abped-college-dashboard.s3.us-east-2.amazonaws.com/tted/college-backend/college/2445eb83-1043-4c4b-bde2-36e8fa93f1b7.jpg'
    };
    this.slides[1] = {
      src: 'https://images.shiksha.com/mediadata/images/1503059850phpXqxiK7.jpeg'
    };
    this.slides[2] = {
      src: 'https://images.shiksha.com/mediadata/images/1503469243php4MDXEw.jpeg'
    };
  }
  onItemChange($event: any): void {
    console.log('Carousel onItemChange', $event);
  }
}