import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IAboutSubPage } from 'src/app/about-us-page/models/about-sub-page.interface';
import { ITimeline } from 'src/app/about-us-page/models/timeline.interface';
import { AboutSubPageService } from 'src/app/about-us-page/services/about-sub-page.service';
import { TimelineService } from 'src/app/about-us-page/services/timeline.service';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {

  subpage$!:Observable<IAboutSubPage>
  weOfb$!:Observable<ITimeline>;

  constructor( private servicepage: AboutSubPageService,  private serv:TimelineService) {
    
    
  }

  ngOnInit():void{

    this.subpage$= this.servicepage.getAboutSubPages('AboutUs');
    this.weOfb$=this.serv.getTimeline();

  }

}
