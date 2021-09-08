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

  products: Item[] = [];
  

  constructor(private itemService: ItemService) { }

  ngOnInit(): void {
   
    this.itemService.getItemsFromDB().subscribe(
    (firebaseItems) => {
    this.products = firebaseItems;
    this.itemService.saveToServiceFromDB(firebaseItems)});
  }

  onDeleteItem (product: Item) {
    let index = this.products.indexOf(product);
    this.itemService.getAllItems().splice(index, 1); 
    this.itemService.deleteItem(index).subscribe();
  };

  onSendItemsToDB() {
    this.itemService.saveItemsToDB().subscribe(() => {
      alert("lisatud");
    },);
    console.log("salvestatud")
  }

  onSaveToServiceFromDB () {
    this.itemService.saveItemsToDB().subscribe(() => {console.log("lisatud")})
  }

}
