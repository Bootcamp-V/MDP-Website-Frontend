import { Component } from '@angular/core';
import { ServicesPageService } from '../../services/services-page.service';
import { ITapeServicesConsulting } from '../../models/tapeServicesConsulting.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tape-services',
  templateUrl: './tape-services.component.html',
  styleUrls: ['./tape-services.component.scss']
})
export class TapeServicesComponent {
  tapeCons$!:Observable<ITapeServicesConsulting>;

  constructor( private serv:ServicesPageService){
   this.tapeCons$=this.serv.tapeConsuServ$;
      }
}
