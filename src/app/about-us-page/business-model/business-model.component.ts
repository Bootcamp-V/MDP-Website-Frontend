import { Component, OnInit } from '@angular/core';
import { Observable, map } from 'rxjs';
import { IDataBP } from 'src/app/services-page/models/bannerPages.interface';
import { IAboutSubPage } from '../models/about-sub-page.interface';
import { IImageSubpage } from '../models/image-sub-page.interface';
import { AboutSubPageService } from '../services/about-sub-page.service';
import { BannerPagesService } from 'src/app/shared/banner-pages/banner-pages.service';

@Component({
  selector: 'app-business-model',
  templateUrl: './business-model.component.html',
  styleUrls: ['./business-model.component.scss']
})
export class BusinessModelComponent implements OnInit {

 page: string = "business-model";
  banner!: IDataBP;

  urls$!: Observable<IImageSubpage>
  subpage$!:Observable<IAboutSubPage>
  
  constructor(private servicio:BannerPagesService, private servicepage: AboutSubPageService) {

  }

  ngOnInit() :void {
    this.getBannerPage();

    this.subpage$= this.servicepage.getAboutSubPages('BusinessModel');
    this.urls$ =this.servicepage.getImagesSubPages('BusinessModel');
    
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
