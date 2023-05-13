import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { BannerModel } from 'src/app/services-page/models/banner.model';
import { IDescriptionBannerPages, ITitleBannerPages } from 'src/app/services-page/models/bannerPages.interface';
import { ServicesPageService } from 'src/app/services-page/services/services-page.service';
import { IAboutSubPage } from '../models/about-sub-page.interface';
import { IImageSubpage } from '../models/image-sub-page.interface';
import { AboutSubPageService } from '../services/about-sub-page.service';
import { AboutSubPageModel } from '../models/about-sub-page.model';

@Component({
  selector: 'app-business-model',
  templateUrl: './business-model.component.html',
  styleUrls: ['./business-model.component.scss']
})
export class BusinessModelComponent implements OnInit {
  titles!: ITitleBannerPages;
  description!: IDescriptionBannerPages;
  banner!: BannerModel;

  urls$!: Observable<IImageSubpage>
  subpage$!:Observable<IAboutSubPage>
  
  constructor(private serv: ServicesPageService, private servicepage: AboutSubPageService) {

  }

  ngOnInit() :void {
    this.serv.getBannerPage().subscribe((res) => {
      this.titles = res.data[7].attributes.title_banner_pages;
      this.description = res.data[7].attributes.description_banner_pages;
      this.banner = new BannerModel(res.data[7].attributes.img.data[0].attributes.formats.large.url, [this.titles.data[0].attributes.title, this.titles.data[1].attributes.title], []);
      this.serv.bannerPages$.next(this.banner);
    });

    this.subpage$= this.servicepage.getAboutSubPages();
    this.urls$ =this.servicepage.getImagesSubPages('BusinessModel');
    
  }
}
