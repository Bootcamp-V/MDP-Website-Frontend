import { DetailBlogComponent } from './blog-page/components/detail-blog/detail-blog.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ServicesPageComponent } from './services-page/services-page.component';
import { AboutUsPageComponent } from './about-us-page/about-us-page.component';
import { OrganizationComponent } from './about-us-page/organization/organization.component';
import { AboutUsComponent } from './about-us-page/about-us/about-us.component';
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
import { PurposeVisionComponent } from './about-us-page/purpose-vision/purpose-vision.component';

import { SectorsComponent } from './about-us-page/sectors/sectors.component';
import { HistoryComponent } from './about-us-page/history/history.component';
import { RightsArcoComponent } from './contact-page/rights-arco/rights-arco.component';
import { ComplaintsBookComponent } from './contact-page/complaints-book/complaints-book.component';
import { ContactUsComponent } from './contact-page/contact-us/contact-us.component';
import { ListBlogsComponent } from './blog-page/components/list-blogs/list-blogs.component';
import { CategoryComponent } from './blog-page/components/category/category.component';

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
    children: [
    {
      path: '', component: AboutUsComponent,
    },
    { path: 'vision-y-proposito', component: PurposeVisionComponent },
    { path: 'historia', component: HistoryComponent },
    { path: 'organizacion', component: OrganizationComponent },
    { path: 'modelo-de-negocio', component: BusinessModelComponent },
    { path: 'certificaciones', component: CertificationsComponent },
    { path: 'sectores', component: SectorsComponent }
  ]
  },
  { path: 'clientes', component: CustomersPageComponent },
  { path: 'blog', component: BlogPageComponent,children:[
    {
      path: '',
      component: ListBlogsComponent,
    },
  { path:':id',component:DetailBlogComponent},
  { path:'category/:category',component:CategoryComponent}

  ] },
  { path: 'contacto', component: ContactPageComponent,

  children: [
    {
      path: '', component: ContactUsComponent ,
    },
    { path: 'derechos-arco', component: RightsArcoComponent },
    { path: 'libro-de-reclamaciones', component: ComplaintsBookComponent },

  ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}