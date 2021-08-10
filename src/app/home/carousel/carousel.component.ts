import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { Carousel } from 'src/app/models/carousel.model';
import { CarouselService } from 'src/app/services/carousel.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
 images2: Carousel[] = [];

  constructor(private config: NgbCarouselConfig,
    private carouselService: CarouselService) {
    // customize default values of carousels used by this component tree
    
    
  }

  ngOnInit(): void {
    this.images2 = this.carouselService.getAllImages();
    this.config.interval = this.carouselService.interval;
    this.config.wrap = this.carouselService.wrap
    this.config.keyboard = this.carouselService.keyboard
    this.config.pauseOnHover = this.carouselService.pauseOnHover
    if(this.images2.length == 1) {
      this.config.showNavigationArrows = false;
      this.config.showNavigationIndicators = false;
    }
  }

}
