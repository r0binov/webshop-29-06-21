import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CategoryServiceService } from 'src/app/admin-home/category/admin/category/category-service.service';
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
    this.itemService.getAllItems().push(form.value);
    console.log(form.value);
  
  }

}
