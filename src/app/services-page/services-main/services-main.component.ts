import { Component, OnInit } from '@angular/core';
import { BannerModel } from '../models/banner.model';
import { ServicesPageService } from '../services/services-page.service';
import { IDescriptionBannerPages, ITitleBannerPages } from '../models/bannerPages.interface';

@Component({
  selector: 'app-services-main',
  templateUrl: './services-main.component.html',
  styleUrls: ['./services-main.component.scss']
})
export class ServicesMainComponent implements OnInit{

  titles!:ITitleBannerPages;
  description!:IDescriptionBannerPages;
  banner!:BannerModel;


  constructor(private serv:ServicesPageService){

  }


  ngOnInit() {
    this.serv.getBannerPage().subscribe((res) => {

        this.titles=res.data[0].attributes.title_banner_pages;
        this.description=res.data[0].attributes.description_banner_pages;
this.banner= new BannerModel(res.data[0].attributes.img.data[0].attributes.formats.large.url,[this.titles.data[0].attributes.title,this.titles.data[1].attributes.title],[]);
this.serv.bannerPages$.next(this.banner);

    });
  }






}
