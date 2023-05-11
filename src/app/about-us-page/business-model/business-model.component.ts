import { Component, OnInit } from '@angular/core';
import { BannerModel } from 'src/app/services-page/models/banner.model';
import { IDescriptionBannerPages, ITitleBannerPages } from 'src/app/services-page/models/bannerPages.interface';
import { ServicesPageService } from 'src/app/services-page/services/services-page.service';

@Component({
  selector: 'app-business-model',
  templateUrl: './business-model.component.html',
  styleUrls: ['./business-model.component.scss']
})
export class BusinessModelComponent implements OnInit {
  titles!: ITitleBannerPages;
  description!: IDescriptionBannerPages;
  banner!: BannerModel;


  constructor(private serv: ServicesPageService) {

  }


  ngOnInit() {
    this.serv.getBannerPage().subscribe((res) => {
      this.titles = res.data[7].attributes.title_banner_pages;
      this.description = res.data[7].attributes.description_banner_pages;
      this.banner = new BannerModel(res.data[7].attributes.img.data[0].attributes.formats.large.url, [this.titles.data[0].attributes.title, this.titles.data[1].attributes.title], []);
      this.serv.bannerPages$.next(this.banner);
    });
  }
}
