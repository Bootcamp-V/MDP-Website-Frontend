import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { NavbarComponent } from './shared/header/navbar/navbar.component';
import { ServicesBannerComponent } from './shared/services-banner/services-banner.component';
import { BannerContentRectangleComponent } from './shared/banner-content-rectangle/banner-content-rectangle.component';
import { SocialsComponent } from './shared/header/socials/socials.component';
import { SearchComponent } from './shared/header/search/search.component';
import { AboutComponent } from './home/components/about/about.component';
import { SliderHomeComponent } from './home/components/slider-home/slider-home.component';
import { ServicesPageComponent } from './services-page/services-page.component';
import { AboutUsPageComponent } from './about-us-page/about-us-page.component';
import { CustomersPageComponent } from './customers-page/customers-page.component';
import { BlogPageComponent } from './blog-page/blog-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { SoftwareDevelopmentComponent } from './services-page/software-development/software-development.component';
import { SoftwareTestingComponent } from './services-page/software-testing/software-testing.component';
import { ConsultingComponent } from './services-page/consulting/consulting.component';
import { TalentComponent } from './services-page/talent/talent.component';
import { ServicesMainComponent } from './services-page/services-main/services-main.component';
import { BannerServiceComponent } from './services-page/components/banner/banner.component';
import { StepsComponent } from './services-page/components/steps/steps.component';
import { WeOfferComponent } from './services-page/components/we-offer/we-offer.component';
import { ContactInfoServicesComponent } from './services-page/components/contact-info-services/contact-info-services.component';
import { ContactservicesComponent } from './services-page/components/contactservices/contactservices.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    ServicesBannerComponent,
    BannerContentRectangleComponent,
    SocialsComponent,
    SearchComponent,
    AboutComponent,
    SliderHomeComponent,
    AboutUsPageComponent,
    CustomersPageComponent,
    BlogPageComponent,
    ContactPageComponent,
    ServicesPageComponent,
    SoftwareDevelopmentComponent,
    SoftwareTestingComponent,
    ConsultingComponent,
    TalentComponent,
    ServicesMainComponent,
    BannerServiceComponent,
    StepsComponent,
    WeOfferComponent,
    ContactInfoServicesComponent,
    ContactservicesComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
