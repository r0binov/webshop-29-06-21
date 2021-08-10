import { Component, OnInit } from '@angular/core';
import { ItemViewComponent } from '../admin-home/item-view/item-view.component';
import { CartService } from '../services/cart.service';
import { ItemService } from '../services/item.service';
import {TranslateService} from '@ngx-translate/core';
import { Item } from '../models/item.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products: any[] = [];

  constructor(private cartService: CartService,
     private itemService: ItemService,
     private translate: TranslateService) { }

  ngOnInit(): void {
    this.products = this.itemService.products;
  }

  addToCart (product: Item) {
      console.log(product);
      this.cartService.productsInCart.push(product);
  }

  onSortByNameAsc() {
    this.itemService.products.sort((currentItem, nextItem) => currentItem.title.localeCompare(nextItem.title));
  }

  onSortByNameDesc() {
    this.itemService.products.sort((currentItem, nextItem) => nextItem.title.localeCompare(currentItem.title));

  }

  onSortByPriceAsc() {
    this.itemService.products.sort((currentItem, nextItem) => currentItem.price - nextItem.price)
  }

  onSortByPriceDesc() {
    this.itemService.products.sort((currentItem, nextItem) => nextItem.price  - currentItem.price)
  }

}
