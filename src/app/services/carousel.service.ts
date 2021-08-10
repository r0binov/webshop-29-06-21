import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarouselService {

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

  constructor() { }

  getAllImages() : {url: string, header: string, description: string, alt: string} []  {
    return this.images2.slice();
  }
}
