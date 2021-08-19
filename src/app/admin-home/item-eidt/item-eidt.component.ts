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
    
    this.categories = this.categoryService.getCategories();
    
    let urlId = this.route.snapshot.paramMap.get("itemId");
    if (urlId) {
      this.id = urlId;
      
       this.itemService.getItemsFromDB().subscribe((firebaseItems) => {
        this.itemService.saveToServiceFromDB(firebaseItems);
        
        
        let itemFound = this.itemService.getAllItems().find(itemInService => itemInService.title == this.id)
        if(itemFound) {
          this.item = itemFound;
        }
        this.editItemForm = new FormGroup ({
        
          imgSrc: new FormControl(this.item.imgSrc),
          title: new FormControl(this.item.title),
          price: new FormControl(this.item.price),
          category: new FormControl(this.item.category),
          isActive: new FormControl(this.item.isActive)
        });

      });
     }
    }


  onSubmit() {
    if(this.editItemForm.valid) {
      let index = this.itemService.getAllItems().findIndex(item => item.title == this.id);
      let item = new Item(
        this.editItemForm.value.imgSrc,
        this.editItemForm.value.title,
        this.editItemForm.value.price,
        this.editItemForm.value.category,
        this.editItemForm.value.isActive,
      );
      this.itemService.editItem(index, item).subscribe(() =>
       {this.router.navigateByUrl("/admin-home/item-view")});
    }
  }


}


