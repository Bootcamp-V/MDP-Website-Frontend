import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IAboutSubPage } from 'src/app/about-us-page/models/about-sub-page.interface';
import { IImageSubpage } from 'src/app/about-us-page/models/image-sub-page.interface';
import { AboutSubPageService } from 'src/app/about-us-page/services/about-sub-page.service';

@Component({
  selector: 'app-content-video',
  templateUrl: './content-video.component.html',
  styleUrls: ['./content-video.component.scss']
})
export class ContentVideoComponent implements OnInit {

  urls$!: Observable<IImageSubpage>
  subpage$!:Observable<IAboutSubPage>

  constructor( private servicepage: AboutSubPageService) {
    
  }


  ngOnInit():void{

    this.subpage$= this.servicepage.getAboutSubPages();
    this.urls$ =this.servicepage.getImagesSubPages();
  

}

}
