import { Component} from '@angular/core';
import { Observable } from 'rxjs';
import { ServicesPageService } from '../../services/services-page.service';
import { DataOffer } from '../../models/weOfferServices.model.interface';

@Component({
  selector: 'app-we-offer',
  templateUrl: './we-offer.component.html',
  styleUrls: ['./we-offer.component.scss']
})
export class WeOfferComponent {
  weOfb$!:Observable<DataOffer>;

  constructor( private serv:ServicesPageService){
   this.weOfb$=this.serv.weOff$;
      }


}
