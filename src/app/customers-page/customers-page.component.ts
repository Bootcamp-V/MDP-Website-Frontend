import { Component } from '@angular/core';
import { IDataBP } from '../services-page/models/bannerPages.interface';
import { map } from 'rxjs';
import { BannerPagesService } from '../shared/banner-pages/banner-pages.service';

@Component({
  selector: 'app-customers-page',
  templateUrl: './customers-page.component.html',
  styleUrls: ['./customers-page.component.scss']
})
export class CustomersPageComponent {
  banner!: IDataBP;


  constructor(private servicio:BannerPagesService) {

  }


  ngOnInit() {
    this.getBannerPage();
  }

  getBannerPage() {
    this.servicio.getBannerPage().pipe(
      map((res) => {
        for (let i of res.data) {

          if (i.attributes.page == "Customers") {
            this.banner = i;
          }

        }
      })

    ).subscribe((res) => {
      this.servicio.bannerPages$.next(this.banner);
    });
  }


}
