import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { ItemAddComponent } from './admin-home/item-add/item-add.component';
import { ItemEidtComponent } from './admin-home/item-eidt/item-eidt.component';
import { ItemViewComponent } from './admin-home/item-view/item-view.component';
import { ViewItemComponent } from './home/view-item/view-item.component';
import { CategoryComponent } from './admin-home/category/category.component';
import { CarouselSettingsComponent } from './admin-home/carousel-settings/carousel-settings.component';

const routes: Routes = [
  { path: "", component: HomeComponent},
  { path: "cart", component: CartComponent},
  { path: "item/:itemId", component: ViewItemComponent},
  { path: "admin", component: AdminHomeComponent},
  { path: "admin-home/item-add", component: ItemAddComponent},
  { path: "admin-home/item-eidt/:itemId", component: ItemEidtComponent},
  { path: "admin-home/item-view", component: ItemViewComponent},
  { path: "admin-home/category", component: CategoryComponent},
  { path: "admin-home/carousel-settings", component: CarouselSettingsComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
