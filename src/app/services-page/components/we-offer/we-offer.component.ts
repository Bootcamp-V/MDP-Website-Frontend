import { Component, Input } from '@angular/core';
import { WeOffer } from '../../models/we-offer-model';
import { Observable } from 'rxjs';
import { ServicesPageService } from '../../services/services-page.service';
import { DataOffer } from '../../models/weOfferServices.model.interface';

@Component({
  selector: 'app-we-offer',
  templateUrl: './we-offer.component.html',
  styleUrls: ['./we-offer.component.scss']
})
export class WeOfferComponent {
  @Input() offer!:WeOffer;
  weOfb$!:Observable<DataOffer>;

  constructor( private serv:ServicesPageService){
   this.weOfb$=this.serv.weOff$;
      }


}
