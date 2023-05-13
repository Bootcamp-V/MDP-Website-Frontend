import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { IBannerPages, IDataBP } from 'src/app/services-page/models/bannerPages.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BannerPagesService {
  bannerPages$!:Subject<IDataBP>;
  constructor(private http:HttpClient) {
    this.bannerPages$= new Subject();
  }


  getBannerPage():Observable<IBannerPages>{
    return this.http.get<IBannerPages>(environment.baseUrl+'/api/banner-pages?populate=*');
  }
}
