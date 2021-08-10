import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
   products = [{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/~0YAAOSwXKNdOCNY/s-l225.webp","title":"Aluminium HD Polarized Photochromic Sunglasses Men Driving Chameleon Sun Glasses","price":1000000000.0999,"category":"sunglasses"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/gksAAOSw6IJdoDH~/s-l225.webp","title":"Aluminium HD Polarized Photochromic Sunglasses Pilot Men Driving Glasses Eyewear","price":11.99,"category":"sunglasses"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/chYAAOSwuhZgPaug/s-l225.webp","title":"DUBERY Fashion Men Polarized Sunglasses TAC Mirror Outdoor Sport Goggles UV400","price":13.99,"category":"sunglasses"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/xLwAAOSwvB5goiqN/s-l225.webp","title":"Sports Polarized Sunglasses for Men Women Driving Fishing Cycling Glasses UV400","price":10.59,"category":"sunglasses"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/tysAAOSwxr1fX4ie/s-l225.webp","title":"Men Aluminium HD Polarized Photochromic Sunglasses Chameleon Driving Sun Glasses","price":10.99,"category":"sunglasses"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/qvEAAOSwER1gPwIy/s-l225.webp","title":"KDEAM Outdoor Sports Polarized Men Sunglasses Night Vision Goggles UV400","price":18.99,"category":"sunglasses"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/JLcAAOSwl8NVe1wU/s-l225.webp","title":"Square Transparent Clear Frame Mirror Lens Classic Sunglasses U4", "price":18.99,"category":"sunglasses"}
];

  private url = "https://bootleg-ebay-default-rtdb.europe-west1.firebasedatabase.app/items.json"

  constructor(private http: HttpClient) { }


}
