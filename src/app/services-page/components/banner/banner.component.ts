import { Component} from '@angular/core';
import { Observable } from 'rxjs';
import { ServicesPageService } from '../../services/services-page.service';
import { IDataBP } from '../../models/bannerPages.interface';

@Component({
  selector: 'app-banner-new',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerServiceComponent{
  bannerOb$!:Observable<IDataBP>;

  constructor( private serv:ServicesPageService){
this.bannerOb$=this.serv.bannerPages$;
  }




}
