import { Component } from '@angular/core';
import { DataOffer } from '../../models/weOfferServices.model.interface';
import { DataBussinesService } from '../../models/bussinesService.interface';
import { Observable } from 'rxjs';
import { ServicesPageService } from '../../services/services-page.service';

@Component({
  selector: 'app-services-bussines',
  templateUrl: './services-bussines.component.html',
  styleUrls: ['./services-bussines.component.scss']
})
export class ServicesBussinesComponent {
 bussServ$!:Observable<DataBussinesService>;

  constructor( private serv:ServicesPageService){
   this.bussServ$=this.serv.bussinesServ$;
      }
}
