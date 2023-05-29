import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IBlog } from '../model/blog.interface';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment'

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  blogs$!:Subject<IBlog>

  constructor(private http: HttpClient) {
    this.blogs$=new Subject();
  }




  getBlogs():Observable<IBlog>{
    return this.http.get<IBlog>(environment.baseUrl+'/api/blogs?populate=*')
  }

  
}
