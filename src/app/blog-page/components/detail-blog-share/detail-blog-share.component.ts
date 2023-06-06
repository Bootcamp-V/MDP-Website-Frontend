import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../services/blog.service';
import { IDetailShare} from '../../model/share.interface';

@Component({
  selector: 'app-detail-blog-share',
  templateUrl: './detail-blog-share.component.html',
  styleUrls: ['./detail-blog-share.component.scss']
})
export class DetailBlogShareComponent implements OnInit{

dataShare$= new Observable<IDetailShare>();

constructor(private servicio:BlogService){

}



  ngOnInit() {
this.servicio.getDetailShare().subscribe(
  res=>{
    this.servicio.dataBlogShare$.next(res);

  }
);
this.dataShare$=this.servicio.dataBlogShare$;
  }



}
