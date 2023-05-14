import { Component, OnInit } from '@angular/core';
import { ISectors } from './models/sectors.model';
import { Observable } from 'rxjs';
import { SectorsService } from './services/sectors.service';
import { BannerModel } from 'src/app/services-page/models/banner.model';
import {
  ITitleBannerPages,
  IDescriptionBannerPages,
} from 'src/app/services-page/models/bannerPages.interface';
import { ServicesPageService } from 'src/app/services-page/services/services-page.service';

@Component({
  selector: 'app-sectors',
  templateUrl: './sectors.component.html',
  styleUrls: ['./sectors.component.scss'],
})
export class SectorsComponent implements OnInit {
  dataSectors$!: Observable<ISectors>;
  titles!: ITitleBannerPages;
  description!: IDescriptionBannerPages;
  banner!: BannerModel;

  constructor(
    private serv: ServicesPageService,
    private serviceSectors: SectorsService
  ) {}

  ngOnInit() {
    this.dataSectors$ = this.serviceSectors.getSectorsInfo();

    this.serv.getBannerPage().subscribe((res) => {
      this.titles = res.data[9].attributes.title_banner_pages;
      this.description = res.data[9].attributes.description_banner_pages;
      this.banner = new BannerModel(
        res.data[9].attributes.img.data[0].attributes.formats.large.url,
        [
          this.titles.data[0].attributes.title,
          this.titles.data[1].attributes.title,
        ],
        []
      );
      this.serv.bannerPages$.next(this.banner);
    });
  }
 
}
