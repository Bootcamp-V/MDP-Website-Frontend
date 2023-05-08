import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ConsultingComponent } from './consulting/consulting.component';
import { SoftwareDevelopmentComponent } from './software-development/software-development.component';
import { SoftwareTestingComponent } from './software-testing/software-testing.component';
import { TalentComponent } from './talent/talent.component';
import { ServicesPageComponent } from './services-page.component';

@NgModule({
  declarations: [
    ServicesPageComponent,
    SoftwareDevelopmentComponent,
    SoftwareTestingComponent,
    ConsultingComponent,
    TalentComponent,
  ],
  exports: [ServicesPageComponent],
  imports: [CommonModule, RouterModule],
})
export class ServicesPageModule {}
