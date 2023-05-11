import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { IBannerPages } from '../models/bannerPages.interface';
import { environment } from 'src/environments/environment';
import { ContactPageComponent } from 'src/app/contact-page/contact-page.component';

@Injectable({
  providedIn: 'root'
})
export class ServicesPageService implements OnInit{

  constructor(private http:HttpClient) {

}


  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  getBannerPage(){
    return this.http.get<IBannerPages>(environment.baseUrl+'/api/banner-pages?populate=*');
  }
  postContactServices( data:Object){
    return this.http.post(environment.baseUrl+'/api/contact-service-forms',data).subscribe( res=> console.log(res));
  }


  postContactServicesConsulting( data:Object){
    return this.http.post(environment.baseUrl+'/api/contact-service-consulting-forms',data).subscribe( res=> console.log(res));
  }

}
