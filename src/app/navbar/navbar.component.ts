import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  sumOfCart = 0;

  constructor(private translate: TranslateService,
    private cartService: CartService,
    ) { }

  ngOnInit(): void {
    let lang = localStorage.getItem("language")
    if (lang) {
      this.translate.use(lang);
    } else {
      this.translate.use("ee")
      localStorage.setItem("language", "ee")
    }
    this.cartService.cartChanged.subscribe(() => {

    });
   this.cartService.cartChanged.subscribe(() => { 
    this.calculateSumOfCart();
  });
    console.log(this.calculateSumOfCart());
    
  }
  

  useLanguage(language: string): void {
    this.translate.use(language);
    localStorage.setItem("langauge", language)
  }

 
    calculateSumOfCart() {
      this.sumOfCart = 0;
      this.cartService.getItemsFromCart().forEach(itemInCart => {
        this.sumOfCart += itemInCart.price
      });
    }
  

}
