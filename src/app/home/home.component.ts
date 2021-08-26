import { Component, OnInit } from '@angular/core';
import { ItemViewComponent } from '../admin-home/item-view/item-view.component';
import { CartService } from '../services/cart.service';
import { ItemService } from '../services/item.service';
import {TranslateService} from '@ngx-translate/core';
import { Item } from '../models/item.model';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products: Item[] = [];
  isLoading = false;
  isLoggedIn = false;

  constructor(private cartService: CartService,
     private itemService: ItemService,
     private translate: TranslateService,
     private authService: AuthService) { }

  ngOnInit(): void {
    
    this.isLoggedIn = sessionStorage.getItem("userData") ? true : false;

    this.authService.loggedInChanged.subscribe(() => {
       this.isLoggedIn = sessionStorage.getItem("userData") ? true : false;
    });

    this.isLoading = true;
    this.itemService.getItemsFromDB().subscribe(firebaseItems => {
      this.isLoading = false;
      this.products = firebaseItems;
      this.itemService.saveToServiceFromDB(firebaseItems)});
  }

  onSortByNameAsc() {
    this.products.sort((currentItem, nextItem) => currentItem.title.localeCompare(nextItem.title));
  }

  onSortByNameDesc() {
    this.products.sort((currentItem, nextItem) => nextItem.title.localeCompare(currentItem.title));

  }

  onSortByPriceAsc() {
    this.products.sort((currentItem, nextItem) => currentItem.price - nextItem.price)
  }

  onSortByPriceDesc() {
    this.products.sort((currentItem, nextItem) => nextItem.price  - currentItem.price)
  }

  saveToDBOnActiveChanged(item: Item) {
    console.log(item);
    this.itemService.saveItemsToDB().subscribe();
  }


}
