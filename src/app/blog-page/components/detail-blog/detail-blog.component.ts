import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { BlogService } from '../../services/blog.service';
import { DataBlog } from '../../model/blog.interface';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-detail-blog',
  templateUrl: './detail-blog.component.html',
  styleUrls: ['./detail-blog.component.scss']
})
export class DetailBlogComponent implements OnInit{

id!:number;
data$!:Subject<DataBlog>

constructor(private rutaActiva: ActivatedRoute,private servicio:BlogService){
this.data$=servicio.dataBlogs$;
}

ngOnInit() {

  this.rutaActiva.params.subscribe(
    (params: Params) => {
      this.id=+params['id'];
    }
  );

  this.servicio.getBlogs().subscribe(
    (res)=>{
   this.servicio.dataBlogs$.next(res.data[this.id]);

    }

  );

}

}
