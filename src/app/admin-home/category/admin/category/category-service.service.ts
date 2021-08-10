import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryServiceService {
  private categories: string[] = ["sunglasses", "glasses", "spectacle case"];

  constructor() { }

  getCategories() {
    return this.categories.slice();
  }

  getCategoriesWithoutSlice() {
    return this.categories;
  }
  deleteCategory(category: string) {
    let index = this.categories.indexOf(category);
    this.categories.splice(index, 1);
    console.log(category);
    
  }

  addCategory(category: string) {
    this.categories.push(category);
  }
}
