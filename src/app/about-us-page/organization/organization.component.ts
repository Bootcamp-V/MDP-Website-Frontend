import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BannerModel } from 'src/app/services-page/models/banner.model';
import { IBannerPages } from 'src/app/services-page/models/bannerPages.interface';
import { AboutPageService } from '../services/about-page.service';

@Component({
  selector: 'app-organization',
  templateUrl: './organization.component.html',
  styleUrls: ['./organization.component.scss']
})
export class OrganizationComponent implements OnInit {
  banner!: BannerModel;
  
  bp$!:Observable<IBannerPages>;

  constructor(private serv:AboutPageService ) {

  }
  ngOnInit(): void {
    
    this.bp$= this.serv.getBannerPage();
    console.log(this.bp$);
    
    
  }
}
