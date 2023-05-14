import { Component } from '@angular/core';
import { BannerModel } from 'src/app/services-page/models/banner.model';
import { ITitleBannerPages, IDescriptionBannerPages } from 'src/app/services-page/models/bannerPages.interface';
import { ServicesPageService } from 'src/app/services-page/services/services-page.service';

@Component({
  selector: 'app-purpose-vision',
  templateUrl: './purpose-vision.component.html',
  styleUrls: ['./purpose-vision.component.scss']
})
export class PurposeVisionComponent {
  titles!: ITitleBannerPages;
  description!: IDescriptionBannerPages;
  banner!: BannerModel;


  constructor(private serv: ServicesPageService) {

  }


  ngOnInit() {
    this.serv.getBannerPage().subscribe((res) => {

      this.titles = res.data[10].attributes.title_banner_pages;
      this.description = res.data[10].attributes.description_banner_pages;
      this.banner = new BannerModel(res.data[10].attributes.img.data[0].attributes.formats.large.url, [this.titles.data[0].attributes.title], [this.description.data[0].attributes.text]);
      this.serv.bannerPages$.next(this.banner);

    });
  }
}
