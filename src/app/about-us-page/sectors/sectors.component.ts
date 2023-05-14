import { Component, OnInit } from '@angular/core';
import { ISectors } from './models/sectors.model';
import { Observable, map } from 'rxjs';
import { IDataBP} from 'src/app/services-page/models/bannerPages.interface';
import { BannerPagesService } from 'src/app/shared/banner-pages/banner-pages.service';
import { SectorsService } from './services/sectors.service';

@Component({
  selector: 'app-sectors',
  templateUrl: './sectors.component.html',
  styleUrls: ['./sectors.component.scss'],
})
export class SectorsComponent implements OnInit {
  dataSectors$!: Observable<ISectors>;

  page: string = "sectors";
  banner!: IDataBP;

  constructor(private servicio:BannerPagesService, private serviceSectors: SectorsService) {

  }


  ngOnInit() {
    this.dataSectors$ = this.serviceSectors.getSectorsInfo();
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
