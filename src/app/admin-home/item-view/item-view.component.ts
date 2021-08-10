import { Component, OnInit } from '@angular/core';
import { ItemService } from 'src/app/services/item.service';
import { Item } from 'src/app/models/item.model';
import { ItemEidtComponent } from '../item-eidt/item-eidt.component';
@Component({
  selector: 'app-item-view',
  templateUrl: './item-view.component.html',
  styleUrls: ['./item-view.component.css']
})
export class ItemViewComponent implements OnInit {

  products: any[] = [];

  constructor(private itemService: ItemService) { }

  ngOnInit(): void {
    this.products = this.itemService.products;
  }

  onDeleteItem (product: Item) {
    let index = this.products.indexOf(product);
    this.itemService.products.splice(index, 1); 
    this.products = this.itemService.products;
  };

}
