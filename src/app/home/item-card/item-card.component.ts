import { Component,EventEmitter, OnInit, Input, Output } from '@angular/core';
import { Item } from 'src/app/models/item.model';
import { CartService } from 'src/app/services/cart.service';
import {TranslateService} from '@ngx-translate/core';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.css']
})
export class ItemCardComponent implements OnInit {

  @Input() product!: Item;
  @Output() activeChangedEvent = new EventEmitter();
  @Input() isLoggedIn = false;

  constructor(private cartService: CartService,
    private translate: TranslateService,
    private itemService: ItemService
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
    this.itemService.saveItemsToDB().subscribe();
    this.activeChangedEvent.emit(this.product);
  }
  
}
