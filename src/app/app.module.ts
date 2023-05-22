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
import { BannerContentRectangleComponent } from './home/components/banner-content-rectangle/banner-content-rectangle.component';
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
import { CertificationsComponent } from './about-us-page/certifications/certifications.component';
import { ServicesMainComponent } from './services-page/services-main/services-main.component';
import { BusinessModelComponent } from './about-us-page/business-model/business-model.component';
import { StepsComponent } from './services-page/components/steps/steps.component';
import { WeOfferComponent } from './services-page/components/we-offer/we-offer.component';
import { ContactInfoServicesComponent } from './services-page/components/contact-info-services/contact-info-services.component';
import { ContactservicesComponent } from './services-page/components/contactservices/contactservices.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ServicesBussinesComponent } from './services-page/components/services-bussines/services-bussines.component';
import { ConsultingPlanComponent } from './services-page/components/consulting-plan/consulting-plan.component';
import { ServicesModelComponent } from './services-page/components/services-model/services-model.component';
import { AgileBusinessTransComponent } from './services-page/components/agile-business-trans/agile-business-trans.component';
import { AgilePathComponent } from './services-page/components/agile-path/agile-path.component';
import { TapeServicesComponent } from './services-page/components/tape-services/tape-services.component';
import { BannerPagesComponent } from './shared/banner-pages/banner-pages.component';
import { AboutUsComponent } from './about-us-page/about-us/about-us.component';
import { GridComponent } from './about-us-page/about-us/components/grid/grid.component';
import { Grid2Component } from './about-us-page/about-us/components/grid2/grid2.component';
import { TimelineComponent } from './about-us-page/about-us/components/timeline/timeline.component';
import { ContainerComponent } from './about-us-page/about-us/components/container/container.component';
import { OrganizationComponent } from './about-us-page/organization/organization.component';
import { ContainerTextOrganizationMapComponent } from './about-us-page/organization/components/container-text-organization-map/container-text-organization-map.component';
import { PurposeVisionComponent } from './about-us-page/purpose-vision/purpose-vision.component';
import { ContentVideoComponent } from './about-us-page/purpose-vision/components/content-video/content-video/content-video.component';
import { OurValuesComponent } from './about-us-page/purpose-vision/components/our-values/our-values/our-values.component';
import { SectorsComponent } from './about-us-page/sectors/sectors.component';
import { HistoryComponent } from './about-us-page/history/history.component';
import { PostComponent } from './about-us-page/history/components/post/post.component';
import { ComplaintsBookComponent } from './contact-page/complaints-book/complaints-book.component';
import { ContentFormComponent } from './contact-page/complaints-book/components/content-form/content-form.component';
import { ImageComplaintsBookComponent } from './contact-page/complaints-book/components/image-complaints-book/image-complaints-book.component';
import { ContactUsComponent } from './contact-page/contact-us/contact-us.component';
import { ContactFormComponent } from './contact-page/components/contact-form/contact-form.component';

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
    CertificationsComponent,
    ServicesPageComponent,
    SoftwareDevelopmentComponent,
    SoftwareTestingComponent,
    ConsultingComponent,
    TalentComponent,
    ServicesMainComponent,
    BusinessModelComponent,
    StepsComponent,
    WeOfferComponent,
    ContactInfoServicesComponent,
    ContactservicesComponent,
    ServicesBussinesComponent,
    ConsultingPlanComponent,
    ServicesModelComponent,
    AgileBusinessTransComponent,
    AgilePathComponent,
    TapeServicesComponent,
    BannerPagesComponent,
    AboutUsComponent,
    GridComponent,
    Grid2Component,
    TimelineComponent,
    ContainerComponent,
    OrganizationComponent,
    ContainerTextOrganizationMapComponent,
    PurposeVisionComponent,
    ContentVideoComponent,
    OurValuesComponent,
    SectorsComponent,
    HistoryComponent,
    PostComponent,
    ComplaintsBookComponent,
    ContentFormComponent,
    ImageComplaintsBookComponent,
    ContactUsComponent,
    ContactFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
