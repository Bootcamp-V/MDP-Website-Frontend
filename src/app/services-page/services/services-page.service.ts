import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { IBannerPages } from '../models/bannerPages.interface';
import { environment } from 'src/environments/environment';
import { ContactPageComponent } from 'src/app/contact-page/contact-page.component';
import { Subject, Observable } from 'rxjs';
import { BannerModel } from '../models/banner.model';
import { DataOffer, IWeOffer } from '../models/weOfferServices.model.interface';
import { WeOffer } from '../models/we-offer-model';
import { DataInfoService, DataListInfoService, IInfoContactService } from '../models/infoContactService.interfrace';

@Injectable({
  providedIn: 'root'
})
export class ServicesPageService implements OnInit{

banner$!:Subject<IBannerPages>;
bannerPages$!:Subject<BannerModel>;

weOffer$!:Subject<IWeOffer>;
weOff$!:Subject<DataOffer>;
infoContactService$!:Subject<DataInfoService>;



  constructor(private http:HttpClient) {
this.banner$= new Subject();
this.bannerPages$= new Subject();
this.weOffer$= new Subject();
this.weOff$= new Subject();
this.infoContactService$= new Subject();

}


  ngOnInit(): void {
  }

  getBannerPage():Observable<IBannerPages>{
    return this.http.get<IBannerPages>(environment.baseUrl+'/api/banner-pages?populate=*');
  }

  getWeOfferServices():Observable<IWeOffer>{
    return this.http.get<IWeOffer>(environment.baseUrl+'/api/we-offer-services?populate=*');
  }

  getInfoContactServices():Observable<IInfoContactService>{
    return this.http.get<IInfoContactService>(environment.baseUrl+'/api/info-contact-services?populate=*');
  }


  postContactServices( data:Object){
    return this.http.post(environment.baseUrl+'/api/contact-service-forms',data).subscribe( res=> console.log(res));
  }


  postContactServicesConsulting( data:Object){
    return this.http.post(environment.baseUrl+'/api/contact-service-consulting-forms',data).subscribe( res=> console.log(res));
  }

}