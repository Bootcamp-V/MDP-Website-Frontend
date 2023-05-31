import { Injectable } from '@angular/core';
import { IPostAbout } from '../models/posts-about.interface';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class PostsAboutService {

  constructor(private http: HttpClient) { }


  getPostAbout(){
    return this.http.get<IPostAbout>(environment.baseUrl+'/api/post-abouts?populate=*&sort=date:desc&pagination[pageSize]=100');
  }
}
