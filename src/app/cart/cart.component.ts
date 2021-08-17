import { Component, OnInit } from '@angular/core';
import { Item } from '../models/item.model';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  itemsInCart: Item[] = [];
  sumOfCart = 0;
  

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.itemsInCart = this.cartService.getItemsFromCart();
    this.sumOfCart = 0;
    this.itemsInCart.forEach( itemInCart => {
      this.sumOfCart += itemInCart.price;
    });
  }

  onEmptyCart() : void {
    this.cartService.emptyCart();
    this.itemsInCart = this.cartService.getItemsFromCart();
    this.calculateSumOfCart();
    this.cartService.cartChanged.next();

  };

  onRemoveFromCart (product: Item) {
    let index = this.itemsInCart.indexOf(product);
    this.cartService.getItemsFromCart().splice(index, 1); 
    this.calculateSumOfCart();
  };

  calculateSumOfCart() {
    this.sumOfCart = 0;
    this.itemsInCart.forEach(itemInCart => {
      this.sumOfCart += itemInCart.price
    });
  }


}
