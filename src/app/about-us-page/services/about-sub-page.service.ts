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

  getAboutSubPages(subpage_name: string){
    return this.http.get<IAboutSubPage>(environment.baseUrl+'/api/title-about-pages?populate=*&filters[about_sub_page][name][$eq]='+subpage_name);
  }
  
  getImagesSubPages(subpage_name: string){
    return this.http.get<IImageSubpage>(environment.baseUrl+'/api/image-about-pages?populate=*&filters[about_sub_page][name][$eq]='+subpage_name);
  }


}
