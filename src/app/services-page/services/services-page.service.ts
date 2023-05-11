import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { BannerModel } from '../models/banner.model';
import { IBannerPages } from '../models/bannerPages.interface';

@Injectable({
  providedIn: 'root'
})
export class ServicesPageService {
  banner$!: Subject<IBannerPages>;
  bannerPages$!: Subject<BannerModel>;


  constructor(private http: HttpClient) {
    this.banner$ = new Subject();
    this.bannerPages$ = new Subject();
  }

  getBannerPage(): Observable<IBannerPages> {
    return this.http.get<IBannerPages>('http://localhost:1337/api/banner-pages?populate=*');
  }

}
