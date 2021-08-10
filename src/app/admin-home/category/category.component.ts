import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CategoryServiceService } from './admin/category/category-service.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  categories: string[] = [];

  constructor(private categoryService: CategoryServiceService) { }

  ngOnInit(): void {
    this.categories = this.categoryService.getCategories();
  }

  onDeleteCategory(category : string) {
    this.categoryService.deleteCategory(category);
    this.categories = this.categoryService.getCategories();
  }

  onSubmit(form: NgForm) {
    this.categoryService.addCategory(form.value.category);
    this.categories = this.categoryService.getCategories();
    console.log(this.categories);
    form.reset();
  }

}
