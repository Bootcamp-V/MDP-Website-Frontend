import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { BlogService } from '../../services/blog.service';
import { DataBlog } from '../../model/blog.interface';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit{

categoryName!:string;
arrayblogDetail:DataBlog[]=[];

constructor(private router:Router,private rutaActiva:ActivatedRoute,private servicio:BlogService){

}




  ngOnInit() {
    this.rutaActiva.params.subscribe(
      (params: Params) => {
        this.categoryName=params['category'];
      }
    );
    this.getblogs();

  }



  getblogs(){
    this.servicio.getBlogs().subscribe(
      (res)=>{
        for(let i of res.data){
          if(i.attributes.Category==this.categoryName){
            this.arrayblogDetail.push(i);
          }
        }

    });
this.servicio.arrayblogs=this.arrayblogDetail;
  }


  getIndex(id:number){
    this.router.navigate(['blog/'+id]);
    }







}
