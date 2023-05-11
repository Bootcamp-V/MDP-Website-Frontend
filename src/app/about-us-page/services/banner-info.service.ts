import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IBannerInfo } from '../models/banner-info.interface';

@Injectable({
  providedIn: 'root'
})
export class BannerInfoService {

  constructor(private http: HttpClient) { }

  getBannersInfo(){
    return this.http.get<IBannerInfo>('http://localhost:1337/api/banners-info?populate=*');
  }
}
