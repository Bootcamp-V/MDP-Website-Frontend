import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { BlogService } from '../../services/blog.service';
import { DataBlog } from '../../model/blog.interface';

@Component({
  selector: 'app-detail-blog',
  templateUrl: './detail-blog.component.html',
  styleUrls: ['./detail-blog.component.scss']
})
export class DetailBlogComponent implements OnInit{

id!:number;
data!:DataBlog;

constructor(private rutaActiva: ActivatedRoute,private servicio:BlogService,private router:Router){

}

ngOnInit() {

  this.rutaActiva.params.subscribe(
    (params: Params) => {
      this.id=+params['id'];
      this.data=this.servicio.arrayblogs[this.id];
    }
  );
   if(!this.data){
    this.servicio.getBlogs().subscribe(
      res=>{
        this.data=res.data[this.id];
      }
    );
   }
}



getcategory(){
this.router.navigate(['blog/category/'+this.data.attributes.Category]);
}


}



