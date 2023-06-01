import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataBlog, IBlog } from '../model/blog.interface';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment'
import { IListDetailPage } from '../model/list.interface';
import { DataShare, IDetailShare } from '../model/share.interface';

@Injectable({
  providedIn: 'root'
})
export class BlogService {


  dataBlogsGeneral$!:Subject<DataBlog[]>;
  dataBlogShare$!:Subject<IDetailShare>;
  arrayblogs:DataBlog[]=[];

  constructor(private http: HttpClient) {
    this.dataBlogsGeneral$=new Subject();
    this.dataBlogShare$= new Subject();
  }

  getBlogs():Observable<IBlog>{
    return this.http.get<IBlog>(environment.baseUrl+'/api/blogs?populate=*')
  }
  getDetailShare():Observable<IDetailShare>{
    return this.http.get<IDetailShare>(environment.baseUrl+'/api/blog-detail-shares')
  }

  getListDetailBlog():Observable<IListDetailPage>{
    return this.http.get<IListDetailPage>(environment.baseUrl+'/api/blog-component-lists?populate=*')
  }


  updateLikesBlog(data:Object,id:number):Observable<IBlog>{
    return this.http.put<IBlog>(environment.baseUrl+'/api/blogs/'+id,data)
  }

}
