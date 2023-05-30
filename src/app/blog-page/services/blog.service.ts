import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataBlog, IBlog } from '../model/blog.interface';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment'
import { IListDetailPage } from '../model/list.interface';

@Injectable({
  providedIn: 'root'
})
export class BlogService {


  dataBlogsGeneral$!:Subject<DataBlog[]>
  arrayblogs:DataBlog[]=[];

  constructor(private http: HttpClient) {
    this.dataBlogsGeneral$=new Subject();
  }

  getBlogs():Observable<IBlog>{
    return this.http.get<IBlog>(environment.baseUrl+'/api/blogs?populate=*')
  }

  getListDetailBlog():Observable<IListDetailPage>{
    return this.http.get<IListDetailPage>(environment.baseUrl+'/api/blog-component-lists?populate=*')
  }


}
