import { Component, LOCALE_ID, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IPostAbout } from 'src/app/about-us-page/models/posts-about.interface';
import { PostsAboutService } from 'src/app/about-us-page/services/posts-about.service';


import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
  providers: [{ provide: LOCALE_ID, useValue: 'es' }]

})
export class PostComponent implements OnInit {

  posts$!: Observable<IPostAbout>

  constructor( private servicepage: PostsAboutService) {registerLocaleData(localeEs);

    
  }

  ngOnInit():void{

    this.posts$= this.servicepage.getPostAbout();
  }



   
}
