import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { IDataBP } from 'src/app/services-page/models/bannerPages.interface';
import { BannerPagesService } from './banner-pages.service';

@Component({
  selector: 'app-banner-pages',
  templateUrl: './banner-pages.component.html',
  styleUrls: ['./banner-pages.component.scss']
})
export class BannerPagesComponent {
  bannerOb$!:Observable<IDataBP>;

  constructor( private serv:BannerPagesService){
this.bannerOb$=this.serv.bannerPages$;
  }

}
