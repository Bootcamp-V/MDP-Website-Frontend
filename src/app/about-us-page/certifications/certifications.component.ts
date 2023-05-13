import { Component, OnInit } from '@angular/core';
import { BannerModel } from 'src/app/services-page/models/banner.model';
import { IDescriptionBannerPages, ITitleBannerPages } from 'src/app/services-page/models/bannerPages.interface';
import { ServicesPageService } from 'src/app/services-page/services/services-page.service';
import { ICertifications } from './models/certifications.interface';
import { Observable } from 'rxjs';
import { CertificationsService } from './services/certifications.service';
@Component({
  selector: 'app-certifications',
  templateUrl: './certifications.component.html',
  styleUrls: ['./certifications.component.scss'],
})
export class CertificationsComponent implements OnInit {
 
  titles!: ITitleBannerPages;
  description!: IDescriptionBannerPages;
  banner!: BannerModel;

  certColaborators$!: Observable<ICertifications>;
  certOrganizations$!: Observable<ICertifications>;

  constructor(
    private serv: ServicesPageService,
    private serviceCertifications: CertificationsService
  ) {}

  ngOnInit() {

    this.serv.getBannerPage().subscribe((res) => {
      this.titles = res.data[8].attributes.title_banner_pages;
      this.description = res.data[8].attributes.description_banner_pages;
      this.banner = new BannerModel(res.data[8].attributes.img.data[0].attributes.formats.large.url,
        [
          this.titles.data[0].attributes.title,
          this.titles.data[1].attributes.title,
        ],
        []
      );
      this.serv.bannerPages$.next(this.banner);
    });

    this.certOrganizations$ = this.serviceCertifications.getInfoCertification('Organization');
    this.certColaborators$ = this.serviceCertifications.getInfoCertification('Colaborators');
  }
}
