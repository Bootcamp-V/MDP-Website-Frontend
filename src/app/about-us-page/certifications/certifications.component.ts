import { Component, OnInit } from '@angular/core';
import { IDataBP } from 'src/app/services-page/models/bannerPages.interface';
import { ICertifications } from './models/certifications.interface';
import { Observable, map } from 'rxjs';
import { CertificationsService } from './services/certifications.service';
import { BannerPagesService } from 'src/app/shared/banner-pages/banner-pages.service';
@Component({
  selector: 'app-certifications',
  templateUrl: './certifications.component.html',
  styleUrls: ['./certifications.component.scss'],
})
export class CertificationsComponent implements OnInit {
  page: string = "certifications";
  banner!: IDataBP;

  certColaborators$!: Observable<ICertifications>;
  certOrganizations$!: Observable<ICertifications>;

  constructor(
    private servicio:BannerPagesService,
    private serviceCertifications: CertificationsService
  ) {}

  ngOnInit() {

 this.getBannerPage();

    this.certOrganizations$ = this.serviceCertifications.getInfoCertification('Organization');
    this.certColaborators$ = this.serviceCertifications.getInfoCertification('Colaborators');
  }
    getBannerPage() {
    this.servicio.getBannerPage().pipe(
      map((res) => {
        for (let i of res.data) {

          if (i.attributes.page == this.page) {
            this.banner = i;
          }

        }
      })

    ).subscribe((res) => {
      this.servicio.bannerPages$.next(this.banner);
    });
  }
}
