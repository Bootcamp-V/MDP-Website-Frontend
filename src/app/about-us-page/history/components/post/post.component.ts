import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IPostAbout } from 'src/app/about-us-page/models/posts-about.interface';
import { PostsAboutService } from 'src/app/about-us-page/services/posts-about.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  posts$!: Observable<IPostAbout>

  constructor( private servicepage: PostsAboutService) {
    
  }

  ngOnInit():void{

    this.posts$= this.servicepage.getPostAbout();
  }


}
