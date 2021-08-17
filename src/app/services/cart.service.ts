import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Item } from '../models/item.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private productsInCart: Item[] = [];
  cartChanged  = new Subject();

  constructor() { }

  getItemsFromCart() {
    return this.productsInCart.slice();
  }

  addToCart(item: Item): void {
    this.productsInCart.push(item);
  }

  emptyCart(): void {
    this.productsInCart = [];
  }

  
}
