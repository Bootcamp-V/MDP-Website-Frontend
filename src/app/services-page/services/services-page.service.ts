import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { IBannerPages } from '../models/bannerPages.interface';
import { environment } from 'src/environments/environment';
import { ContactPageComponent } from 'src/app/contact-page/contact-page.component';
import { Subject, Observable } from 'rxjs';
import { BannerModel } from '../models/banner.model';

@Injectable({
  providedIn: 'root'
})
export class ServicesPageService implements OnInit{

banner$!:Subject<IBannerPages>;
bannerPages$!:Subject<BannerModel>;



  constructor(private http:HttpClient) {
this.banner$= new Subject();
this.bannerPages$= new Subject();;
}


  ngOnInit(): void {

  }

  getBannerPage():Observable<IBannerPages>{
    return this.http.get<IBannerPages>(environment.baseUrl+'/api/banner-pages?populate=*');
  }


  postContactServices( data:Object){
    return this.http.post(environment.baseUrl+'/api/contact-service-forms',data).subscribe( res=> console.log(res));
  }


  postContactServicesConsulting( data:Object){
    return this.http.post(environment.baseUrl+'/api/contact-service-consulting-forms',data).subscribe( res=> console.log(res));
  }

}
