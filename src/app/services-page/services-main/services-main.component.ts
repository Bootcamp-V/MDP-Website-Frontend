import { Component, OnInit } from '@angular/core';
import { ServicesPageService } from '../services/services-page.service';
import { IDataBP } from '../models/bannerPages.interface';
import { map } from 'rxjs';

@Component({
  selector: 'app-services-main',
  templateUrl: './services-main.component.html',
  styleUrls: ['./services-main.component.scss']
})
export class ServicesMainComponent implements OnInit {
  banner!: IDataBP;


  constructor(private serv: ServicesPageService) {

  }

  ngOnInit() {
    this.getBannerPage();
  }

  getBannerPage() {
    this.serv.getBannerPage().pipe(
      map((res) => {
        for (let i of res.data) {

          if (i.attributes.page == "Services") {
            this.banner = i;
          }

        }
      })

    ).subscribe((res) => {
      this.serv.bannerPages$.next(this.banner);
    });
  }




}
