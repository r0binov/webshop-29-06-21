import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryServiceService {
  private categories: string[] = ["sunglasses", "glasses", "spectacle case"];

  constructor() { }

  getCategories() {
    this.categories = JSON.parse(localStorage.getItem("categories") as string) || [];
    return this.categories.slice();
  }

  // getCategoriesWithoutSlice() {
  //  return this.categories;
   //}
  deleteCategory(category: string) {
    let index = this.categories.indexOf(category);
    this.categories.splice(index, 1);
    console.log(category);
    this.saveToLocalStorage();
    
  }

  addCategory(category: string) {
    this.categories.push(category);
    this.saveToLocalStorage();
  }

  saveToLocalStorage () {
    localStorage.setItem("categories", JSON.stringify(this.categories));
  }
}
