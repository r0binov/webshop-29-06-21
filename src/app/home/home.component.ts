import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { ItemService } from '../services/item.service';
import {TranslateService} from '@ngx-translate/core';
import { Item } from '../models/item.model';
import { AuthService } from '../auth/auth.service';
import { UniqueCategoryPipe } from '../pipes/unique-category.pipe';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products: Item[] = [];
  isLoading = false;
  isLoggedIn = false;
  categories: string[] = [];
  isPriceSortAsc = true;
  isTitleSortAsc = true;

  constructor(private cartService: CartService,
     private itemService: ItemService,
     private translate: TranslateService,
     private authService: AuthService,
     private uniqueCategoryPipe: UniqueCategoryPipe) { }

  ngOnInit(): void {
    
    this.isLoggedIn = sessionStorage.getItem("userData") ? true : false;

    this.authService.loggedInChanged.subscribe(() => {
       this.isLoggedIn = sessionStorage.getItem("userData") ? true : false;
    });

    this.isLoading = true;
    this.itemService.getItemsFromDB().subscribe(firebaseItems => {
      this.isLoading = false;
      this.products = firebaseItems;
      this.itemService.saveToServiceFromDB(firebaseItems)
      this.categories = this.uniqueCategoryPipe.transform(this.products);
    });
  }

  onSortByName() {
    if(this.isTitleSortAsc) {
      this.products.sort((currentItem, nextItem) => currentItem.title.localeCompare(nextItem.title));
      this.isTitleSortAsc = false;
    } else {
      this.products.sort((currentItem, nextItem) => nextItem.title.localeCompare(currentItem.title));
      this.isTitleSortAsc = true;
    }
  }

    //onSortByNameAsc() {
      //this.products.sort((currentItem, nextItem) => currentItem.title.localeCompare(nextItem.title));
   // }

    //onSortByNameDesc() {
    //  this.products.sort((currentItem, nextItem) => nextItem.title.localeCompare(currentItem.title));
  //
    //}
  onSortByPrice() {
    if (this.isPriceSortAsc) {
      this.products.sort((currentItem, nextItem) => currentItem.price - nextItem.price);
      this.isPriceSortAsc = false;
    } else {
      this.products.sort((currentItem, nextItem) => nextItem.price  - currentItem.price);
      this.isPriceSortAsc = true;
    }
  }


    //onSortByPriceAsc() {
     // this.products.sort((currentItem, nextItem) => currentItem.price - nextItem.price)
   // }

  //onSortByPriceDesc() {
    //  this.products.sort((currentItem, nextItem) => nextItem.price  - currentItem.price)
    //}

  saveToDBOnActiveChanged(item: Item) {
    console.log(item);
    this.itemService.saveItemsToDB().subscribe();
  }

  onCategoryClick(category: string) {
    
    
      this.itemService.getItemsFromDB().subscribe(firebaseItems => {
        this.isLoading = false;
        this.products = firebaseItems;
        this.itemService.saveToServiceFromDB(firebaseItems)
      if (category != 'all') {
        this.products = this.products.filter(item => item.category == category)
    }

  });

    console.log(category);
  }
  
}
