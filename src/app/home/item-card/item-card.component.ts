import { Component, OnInit, Input } from '@angular/core';
import { Item } from 'src/app/models/item.model';
import { CartService } from 'src/app/services/cart.service';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.css']
})
export class ItemCardComponent implements OnInit {

  
  
  @Input() product!: Item;

  constructor(private cartService: CartService,
    private translate: TranslateService,
    ) { }

  ngOnInit(): void {
    
  }

  onAddToCart (product: Item) {
    console.log(product);
    this.cartService.addToCart(product);
    this.cartService.cartChanged.next();
}

  onItemActiveChange() {
    this.product.isActive = !this.product.isActive
  }
  
}
