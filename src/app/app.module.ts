import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from  '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { SliderComponent } from './home/components/slider/slider.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { BannerComponent } from './shared/banner/banner.component';
import { ServicesBannerComponent } from './shared/services-banner/services-banner.component';
import { ContactFormComponent } from './contact/components/contact-form/contact-form.component';
import { BannerContentRectangleComponent } from './banner-content-rectangle/banner-content-rectangle.component';
import { SliderImagesModule } from './slider-images/slider-images.module'
import { SocialsComponent } from './shared/header/socials/socials.component';
import { SearchComponent } from './shared/header/search/search.component';
import { HttpClientModule } from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    HomeComponent,
    SliderComponent,
    HeaderComponent,
    FooterComponent,
    BannerComponent,
    ServicesBannerComponent,
    ContactFormComponent,
    BannerContentRectangleComponent,
    SocialsComponent,
    SearchComponent
  ],
  imports: [BrowserModule, AppRoutingModule,HttpClientModule,SliderImagesModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
