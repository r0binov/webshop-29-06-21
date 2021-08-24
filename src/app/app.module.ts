import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClient, HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { CartComponent } from './cart/cart.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { ItemAddComponent } from './admin-home/item-add/item-add.component';
import { ItemEidtComponent } from './admin-home/item-eidt/item-eidt.component';
import { ItemViewComponent } from './admin-home/item-view/item-view.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ViewItemComponent } from './home/view-item/view-item.component';
import { ItemPricePipe } from './pipes/item-price.pipe';
import { ShortenTitlePipe } from './pipes/shorten-title.pipe';
import { CategoryComponent } from './admin-home/category/category.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselComponent } from './home/carousel/carousel.component';
import { CarouselSettingsComponent } from './admin-home/carousel-settings/carousel-settings.component';
import { ItemCardComponent } from './home/item-card/item-card.component';
import { BtnBackComponent } from './admin-home/btn-back/btn-back.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LoadingComponent } from './loading/loading.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    CartComponent,
    AdminHomeComponent,
    ItemAddComponent,
    ItemEidtComponent,
    ItemViewComponent,
    ViewItemComponent,
    ItemPricePipe,
    ShortenTitlePipe,
    CategoryComponent,
    CarouselComponent,
    CarouselSettingsComponent,
    ItemCardComponent,
    BtnBackComponent,
    LoginComponent,
    SignupComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        }),
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}