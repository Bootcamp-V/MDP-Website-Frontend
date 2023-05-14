import { Component } from '@angular/core';
import { map } from 'rxjs';
import { IDataBP} from 'src/app/services-page/models/bannerPages.interface';
import { BannerPagesService } from 'src/app/shared/banner-pages/banner-pages.service';


@Component({
  selector: 'app-purpose-vision',
  templateUrl: './purpose-vision.component.html',
  styleUrls: ['./purpose-vision.component.scss']
})
export class PurposeVisionComponent {
  page: string = "vision-and-purpose";
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
