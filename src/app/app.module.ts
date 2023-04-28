import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { SliderComponent } from './home/components/slider/slider.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { BannerComponent } from './shared/banner/banner.component';
import { ProductsBannerComponent } from './shared/products-banner/products-banner.component';
import { ContactFormComponent } from './contact/components/contact-form/contact-form.component';
import { NavbarComponent } from './shared/header/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    HomeComponent,
    SliderComponent,
    HeaderComponent,
    FooterComponent,
    BannerComponent,
    ProductsBannerComponent,
    ContactFormComponent,
    NavbarComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
