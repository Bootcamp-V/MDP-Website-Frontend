import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IBannerPages } from 'src/app/services-page/models/bannerPages.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AboutPageService {

  constructor(private http: HttpClient) {

  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  getBannerPage() {
    return this.http.get<IBannerPages>(environment.baseUrl + '/api/banner-pages?populate=*');
  }

}
