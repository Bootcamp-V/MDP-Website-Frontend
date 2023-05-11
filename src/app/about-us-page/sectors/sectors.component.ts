import { Component } from '@angular/core';
import { BannerModel } from 'src/app/services-page/models/banner.model';
import { ITitleBannerPages, IDescriptionBannerPages } from 'src/app/services-page/models/bannerPages.interface';
import { ServicesPageService } from 'src/app/services-page/services/services-page.service';

@Component({
  selector: 'app-sectors',
  templateUrl: './sectors.component.html',
  styleUrls: ['./sectors.component.scss'],
})
export class SectorsComponent {
  titles!: ITitleBannerPages;
  description!: IDescriptionBannerPages;
  banner!: BannerModel;


  constructor(private serv: ServicesPageService) {

  }


  ngOnInit() {
    this.serv.getBannerPage().subscribe((res) => {

      this.titles = res.data[9].attributes.title_banner_pages;
      this.description = res.data[9].attributes.description_banner_pages;
      this.banner = new BannerModel(res.data[9].attributes.img.data[0].attributes.formats.large.url, [this.titles.data[0].attributes.title, this.titles.data[1].attributes.title], []);
      this.serv.bannerPages$.next(this.banner);

    });
  }
  arr = [
    {
      name: 'Banca',
      image:
        'https://www.mdp.com.pe/wp-content/uploads/2017/05/sector_banca.jpg',
    },
    {
      name: 'Aseguradoras AFPs',
      image:
        'https://www.mdp.com.pe/wp-content/uploads/2017/05/sector_aseguradoras.jpg',
    },
    {
      name: 'Telecomunicaciones',
      image:
        'https://www.mdp.com.pe/wp-content/uploads/2017/05/sector_telecomunicaciones.jpg',
    },
    {
      name: 'Retail',
      image:
        'https://www.mdp.com.pe/wp-content/uploads/2017/05/sector_retail.jpg',
    },
  ];
}
