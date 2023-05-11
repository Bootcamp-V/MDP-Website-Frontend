import { Component, OnInit } from '@angular/core';
import { AboutPageService } from '../services/about-page.service';
import { BannerModel } from 'src/app/services-page/models/banner.model';
import { IBannerPages } from 'src/app/services-page/models/bannerPages.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {
  banner!: BannerModel;
  
  bp$!:Observable<IBannerPages>;

  constructor(private serv:AboutPageService ) {

  }
  ngOnInit(): void {
    
    this.bp$= this.serv.getBannerPage();
    console.log(this.bp$);
    
    
  }

}
