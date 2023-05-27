import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-detail-blog',
  templateUrl: './detail-blog.component.html',
  styleUrls: ['./detail-blog.component.scss']
})
export class DetailBlogComponent implements OnInit{

id!:number;

constructor(private rutaActiva: ActivatedRoute){

}

ngOnInit() {

  this.rutaActiva.params.subscribe(
    (params: Params) => {
      this.id=+params['id'];
    }
  );
}

}
