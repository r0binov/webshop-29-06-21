import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryServiceService } from 'src/app/admin-home/category/admin/category/category-service.service';
import { Item } from 'src/app/models/item.model';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-item-eidt',
  templateUrl: './item-eidt.component.html',
  styleUrls: ['./item-eidt.component.css']
})
export class ItemEidtComponent implements OnInit {

  id!: string;
  item!: Item;
  editItemForm!: FormGroup; 
  categories: string[] = [];
  itemIndex!: number;

  constructor(private route: ActivatedRoute,
    private itemService: ItemService,
    private router: Router,
    private categoryService: CategoryServiceService) { }

  ngOnInit(): void {
    let urlId = this.route.snapshot.paramMap.get("itemId");

    this.categories = this.categoryService.getCategories();

    if (urlId) {
      this.id = urlId;
      let itemFound = this.itemService.getAllItems().find(itemInService => itemInService.title == this.id)

      if(itemFound) {
        this.item = itemFound;
      } else {
        alert("Eset ei leitud");
      }
    }

    this.editItemForm = new FormGroup ({
      
      imgSrc: new FormControl(this.item.imgSrc),
      title: new FormControl(this.item.title),
      price: new FormControl(this.item.price),
      category: new FormControl(this.item.category)

    });

  }

  onSubmit() {
    if(this.editItemForm.valid) {
      let index = this.itemService.getAllItems().findIndex(item => item.title == this.id)
      this.itemService.editItem(index, this.editItemForm.value).subscribe(() =>
       {this.router.navigateByUrl("/admin-home/item-view")});
    }
  }


}


