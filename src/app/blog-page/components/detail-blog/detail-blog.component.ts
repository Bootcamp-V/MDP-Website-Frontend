import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { BlogService } from '../../services/blog.service';
import { DataBlog } from '../../model/blog.interface';
import { DataListPage} from '../../model/list.interface';

@Component({
  selector: 'app-detail-blog',
  templateUrl: './detail-blog.component.html',
  styleUrls: ['./detail-blog.component.scss']
})
export class DetailBlogComponent implements OnInit{

id!:number;
blog_id!:number;
data!:DataBlog;
dataListDetail:DataListPage[]=[];
heartButton:boolean=false;


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

this.getlistDetailBlog();
this.blog_id = this.data.id;

}


getlistDetailBlog(){
this.servicio.getListDetailBlog().subscribe(
  (res)=>{
    for(let i of res.data){
      if(i.attributes.BlogName==this.data.attributes.Title){
        this.dataListDetail.push(i);

      }
    }
  }
);
console.log(this.dataListDetail)
}


getcategory(){
this.router.navigate(['blog/category/'+this.data.attributes.Category]);
}

PostLike(){
  if(!this.heartButton){


    let objeto = {
      "data": {
        "Likes": this.data.attributes.Likes+1
      }


    }

    this.heartButton=true;

    try {
      this.servicio.updateLikesBlog(objeto,this.data.id).subscribe(
        (res)=>{
        console.log(res);
        this.data.attributes.Likes=this.data.attributes.Likes+1;
        }
      );


    } catch (error) {
      console.log(error);
    }

  }

}




}



