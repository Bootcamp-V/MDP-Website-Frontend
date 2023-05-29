import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataBlog, IBlog } from '../model/blog.interface';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment'

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  dataBlogs$!:Subject<DataBlog>

  constructor(private http: HttpClient) {
    this.dataBlogs$=new Subject();
  }




  getBlogs():Observable<IBlog>{
    return this.http.get<IBlog>(environment.baseUrl+'/api/blogs?populate=*')
  }


}
