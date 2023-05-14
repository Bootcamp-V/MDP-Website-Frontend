import { Component, OnInit } from '@angular/core';
import { ServicesPageService } from '../services/services-page.service';
import { IDataBP } from '../models/bannerPages.interface';
import { map } from 'rxjs';
import { BannerPagesService } from 'src/app/shared/banner-pages/banner-pages.service';

@Component({
  selector: 'app-services-main',
  templateUrl: './services-main.component.html',
  styleUrls: ['./services-main.component.scss']
})
export class ServicesMainComponent implements OnInit {
  banner!: IDataBP;


  constructor(private serv: ServicesPageService,private servicio:BannerPagesService) {

  }


  ngOnInit() {
    this.getBannerPage();
  }

  getBannerPage() {
    this.servicio.getBannerPage().pipe(
      map((res) => {
        for (let i of res.data) {

          if (i.attributes.page == "Services") {
            this.banner = i;
          }

        }
      })

    ).subscribe((res) => {
      this.servicio.bannerPages$.next(this.banner);
    });
  }

}
