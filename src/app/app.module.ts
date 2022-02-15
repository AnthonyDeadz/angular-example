import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { IntroComponent } from './intro/intro.component';
import { ProductSectionComponent } from './product-section/product-section.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { FooterComponent } from './footer/footer.component';
import { productService } from './services/product.service';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { CartComponent } from './cart/cart.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomePageComponent } from './home-page/home-page.component';
import { CartElementComponent } from './cart/cart-element/cart-element.component';
import { DescriptionPopUpComponent } from './description-pop-up/description-pop-up.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    IntroComponent,
    ProductSectionComponent,
    ProductListComponent,
    ProductCardComponent,
    FooterComponent,
    CartComponent,
    PageNotFoundComponent,
    HomePageComponent,
    CartElementComponent,
    DescriptionPopUpComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
