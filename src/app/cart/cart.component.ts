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
  testImg = [{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/JLcAAOSwl8NVe1wU/s-l225.webp",
  "title":"Square Transparent Clear Frame Mirror Lens Classic Sunglasses U4", 
  "price":18.99,"category":"sunglasses"}];
  
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

  onRemoveOneFromCart (product: { product :Item, quantity: number }) {
    this.cartService.deleteOneFromCart(product)
    this.itemsInCart = this.cartService.getItemsFromCart();
    this.calculateSumOfCart();
    this.cartService.cartChanged.next();
    
    
  };

  calculateSumOfCart() {
    this.sumOfCart = 0;
    this.itemCount = 0;
    this.itemsInCart.forEach(itemInCart => {
      this.sumOfCart += itemInCart.product.price * itemInCart.quantity;
      this.itemCount += itemInCart.quantity
    });
  }

  onRemoveFromCart(product: { product :Item, quantity: number }) {
    let index = this.itemsInCart.indexOf(product);
    this.cartService.deleteItemFromCart(index);
    this.itemsInCart = this.cartService.getItemsFromCart();
    this.calculateSumOfCart();
    this.cartService.cartChanged.next();
  }

  onAddToCart (product: Item) {
    console.log(product);
    this.cartService.addToCart(product);
    this.cartService.cartChanged.next();
  }

}
