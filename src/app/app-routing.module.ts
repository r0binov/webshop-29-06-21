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
import { AuthGuard } from './auth/auth.guard';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';

const routes: Routes = [
  { path: "", component: HomeComponent},
  { path: "cart", component: CartComponent},
  { path: "item/:itemId", component: ViewItemComponent},
  { path: "logi-sisse", component: LoginComponent },
  { path: "admin", canActivateChild: [AuthGuard], children: [ 
    { path: "", component: AdminHomeComponent},
    { path: "item-add", component: ItemAddComponent},
    { path: "item-edit/:itemId", component: ItemEidtComponent},
    { path: "item-view", component: ItemViewComponent},
    { path: "category", component: CategoryComponent},
    { path: "carousel-settings", component: CarouselSettingsComponent},
    { path: "registreeru", component: SignupComponent },
  ]},

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
