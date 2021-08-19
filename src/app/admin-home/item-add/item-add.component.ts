import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CategoryServiceService } from 'src/app/admin-home/category/admin/category/category-service.service';
import { Item } from 'src/app/models/item.model';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-item-add',
  templateUrl: './item-add.component.html',
  styleUrls: ['./item-add.component.css']
})
export class ItemAddComponent implements OnInit {

  categories: string[] = [];

  constructor(private itemService: ItemService, 
    private formService: FormsModule,
    private categoryService: CategoryServiceService) { }

  ngOnInit(): void {
    this.categories = this.categoryService.getCategories();
  }

  onSubmit(form:NgForm) {
    console.log(form);
    console.log(form.value);
    if(form.valid) {
      let item = new Item (
          form.value.imgSrc,
          form.value.title,
          form.value.price,
          form.value.category,
          true
      );
      this.itemService.addItem(item);
      form.reset()
    }
  
  }

}
