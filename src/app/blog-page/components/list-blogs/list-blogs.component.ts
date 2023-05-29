import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogPageComponent } from '../../blog-page.component';
import { BlogService } from '../../services/blog.service';
import { IBlog } from '../../model/blog.interface';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-list-blogs',
  templateUrl: './list-blogs.component.html',
  styleUrls: ['./list-blogs.component.scss']
})
export class ListBlogsComponent implements OnInit{
aray:number[]=[1,2,3,4,5,6,7,8,9,10,11,1,1,1,1,1,1,1,1,1,1,1,1,1,11,1,1,1,1,1,1,1,1,1];
blog$!:Subject<IBlog>

constructor(private router:Router,private routerActive:ActivatedRoute,private servicio:BlogService){
  this.blog$=new Subject();
}
ngOnInit() {

  this.getblogs();


}

getblogs(){
  this.servicio.getBlogs().subscribe(
    (res)=>{
      this.blog$.next(res);

  });

}

getIndex(id:number){
this.router.navigate([id],{relativeTo:this.routerActive});
}




}
