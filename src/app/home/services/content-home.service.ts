import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IContentHome } from '../models/content-home.interface';

@Injectable({
  providedIn: 'root'
})
export class ContentHomeService {

  constructor(private http: HttpClient) { }
  getContentHomeByLocate(locate:string){
    return this.http.get<IContentHome>(environment.baseUrl+'/api/content-homes?populate=*&filters[locate][$eq]='+ locate);
  }
}
