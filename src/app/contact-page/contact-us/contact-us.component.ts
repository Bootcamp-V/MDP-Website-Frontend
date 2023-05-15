import { Component } from '@angular/core';
import { map } from 'rxjs';
import { IDataBP } from 'src/app/services-page/models/bannerPages.interface';
import { BannerPagesService } from 'src/app/shared/banner-pages/banner-pages.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent {
  page: string = "Contact Us";
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
