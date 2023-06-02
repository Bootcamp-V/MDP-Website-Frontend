import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataBlog, IBlog } from '../model/blog.interface';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment'
import { IListDetailPage } from '../model/list.interface';
import { DataShare, IDetailShare } from '../model/share.interface';
import { DataBlog, IBlog } from '../model/blog.interface';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment'
import { IListDetailPage } from '../model/list.interface';
import { DataBlogComment, IBlogComment } from '../model/comment.interface.model';

@Injectable({
  providedIn: 'root'
})
export class BlogService {


  dataBlogsGeneral$!:Subject<DataBlog[]>
  dataBlogShare$!:Subject<IDetailShare>;
  arrayblogs:DataBlog[]=[];


  dataBlogComments$!:Subject<DataBlogComment[]>;
  arraycomments:DataBlogComment[]=[];

  constructor(private http: HttpClient) {
    this.dataBlogsGeneral$=new Subject();
    this.dataBlogShare$= new Subject();
    this.dataBlogComments$=new Subject();
  }

  getBlogs():Observable<IBlog>{
    return this.http.get<IBlog>(environment.baseUrl+'/api/blogs?populate=*&pagination[start]=0&pagination[limit]=40')
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

  getComments():Observable<IBlogComment>{
    return this.http.get<IBlogComment>(environment.baseUrl+'/api/blog-comments?populate[0]=responses&populate[1]=blog_comment&populate[2]=blog&filters[blog_comment]isnull')
  }

  getCommentAllComments():Observable<IBlogComment>{
    return this.http.get<IBlogComment>(environment.baseUrl+'/api/blog-component-lists?populate=*')
  }

  postCommentForm(data:Object){
    return this.http.post(environment.baseUrl+'/api/blog-comments?populate=*',data,{responseType: 'text'});
  }

  updateLikesComments(data:Object,id:number):Observable<IBlogComment>{
    return this.http.put<IBlogComment>(environment.baseUrl+'/api/blog-comments/'+id, data)
  }


  


  
}
