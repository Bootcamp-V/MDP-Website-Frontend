import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IAboutSubPage } from '../models/about-sub-page.interface';
import { environment } from 'src/environments/environment';
import { IImageSubpage } from '../models/image-sub-page.interface';

@Injectable({
  providedIn: 'root'
})
export class AboutSubPageService {

  constructor(private http: HttpClient) { 
  }

  getAboutSubPages(){
    return this.http.get<IAboutSubPage>(environment.devUrl+'/api/about-sub-pages?populate=*');
  }
  
  getImagesSubPages(){
    return this.http.get<IImageSubpage>(environment.devUrl+'/api/image-about-pages?populate=*');

  }


}
