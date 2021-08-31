import { Component, OnInit } from '@angular/core';
import { Item } from '../models/item.model';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  itemsInCart: { product :Item, quantity: number }[] = [];
  sumOfCart = 0;
  itemCount = 0;

  

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.itemsInCart = this.cartService.getItemsFromCart();
    this.sumOfCart = 0;
    this.itemsInCart.forEach( itemInCart => {
      this.sumOfCart += itemInCart.product.price;
    });
  }

  onEmptyCart() : void {
    this.cartService.emptyCart();
    this.itemsInCart = this.cartService.getItemsFromCart();
    this.calculateSumOfCart();
    this.cartService.cartChanged.next();

  };

  onRemoveFromCart (product: { product :Item, quantity: number }) {
    let index = this.itemsInCart.indexOf(product);
    this.cartService.deleteOneFromCart(index)
    this.itemsInCart = this.cartService.getItemsFromCart();
    this.calculateSumOfCart();
    this.cartService.cartChanged.next();
    console.log(index);
    
  };

  calculateSumOfCart() {
    this.sumOfCart = 0;
    this.itemsInCart.forEach(itemInCart => {
      this.sumOfCart += itemInCart.product.price * itemInCart.quantity;
      this.itemCount += itemInCart.quantity
    });
  }


}
