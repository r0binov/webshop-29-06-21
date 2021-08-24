import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Carousel } from '../models/carousel.model';

@Injectable({
  providedIn: 'root'
})
export class CarouselService {

  interval = 10000;
  wrap = true;
  keyboard = true;
  pauseOnHover = true;

   images2 = [
    {url: "https://picsum.photos/id/700/900/500",
     header: "10 seconds between slides...",
     description: "This carousel uses customized default values.",
     alt: "Random first slide"
    },
    {url: "https://picsum.photos/id/533/900/500",
     header: "No mouse events...",
     description: "This carousel doesn't pause or resume on mouse events",
     alt: "Random second slide"
    },
    {url: "https://picsum.photos/id/807/900/500",
     header: "No keyboard...",
     description: "This carousel uses customized default values.",
     alt: "Random third slide"
    },
    {url: "https://picsum.photos/id/124/900/500",
    header: "And no wrap after last slide.",
    description: "This carousel uses customized default values.",
    alt: "Random fourth slide"
   }
   ];

  constructor(private httpService: HttpClient) { }

  getAllImages() : Carousel[]  {
    return this.images2.slice();
  }

  addImage (image: Carousel) {
    this.images2.push(image);
    console.log(image)
  }

  deleteImage (image: Carousel) {
    let i = this.images2.indexOf(image);
    this.images2.splice(i, 1);
  }

  addImageToDB() {
    
  }
}
