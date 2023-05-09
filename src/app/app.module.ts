import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { BannerComponent } from './shared/banner/banner.component';
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
import { ServicesPageModule } from './services-page/services-page.module';
import { AboutUsComponent } from './about-us-page/about-us/about-us.component';
import { GridComponent } from './about-us-page/about-us/components/grid/grid.component';
import { Grid2Component } from './about-us-page/about-us/components/grid2/grid2.component';
import { TimelineComponent } from './about-us-page/about-us/components/timeline/timeline.component';
import { ContainerComponent } from './about-us-page/about-us/components/container/container.component';
import { ImageFigureAboutUsComponent } from './about-us-page/about-us/components/image-figure-about-us/image-figure-about-us.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    BannerComponent,
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
    AboutUsComponent,
    GridComponent,
    Grid2Component,
    TimelineComponent,
    ContainerComponent,
    ImageFigureAboutUsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ServicesPageModule,
  ],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
