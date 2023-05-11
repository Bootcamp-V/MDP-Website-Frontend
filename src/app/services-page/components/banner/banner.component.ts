import { Component, Input, OnInit } from '@angular/core';
import { BannerModel } from '../../models/banner.model';
import { Observable } from 'rxjs';
import { ServicesPageService } from '../../services/services-page.service';

@Component({
  selector: 'app-banner-new',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerServiceComponent implements OnInit{
  bannerOb$!:Observable<BannerModel>;

  constructor( private serv:ServicesPageService){
this.bannerOb$=this.serv.bannerPages$;
  }


  ngOnInit(): void {

  }



}
