import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
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

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'servicios',
    component: ServicesPageComponent,
    children: [
      {
        path: '',
        component: ServicesMainComponent,
      },
      {
        path: 'desarrollo-de-software',
        component: SoftwareDevelopmentComponent,
      },
      { path: 'pruebas-de-software', component: SoftwareTestingComponent },
      { path: 'consultoria', component: ConsultingComponent },
      { path: 'talento', component: TalentComponent },
    ],
  },
  {
    path: 'nosotros',
    component: AboutUsPageComponent,
    children:[
      {
        path: 'certificaciones',
        component: CertificationsComponent,
      }
    ],
   },


  { path: 'clientes', component: CustomersPageComponent },
  { path: 'blog', component: BlogPageComponent },
  { path: 'contacto', component: ContactPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
