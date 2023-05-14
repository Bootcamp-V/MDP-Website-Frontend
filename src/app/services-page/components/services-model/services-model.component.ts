import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { IDataMSD } from '../../models/modeServices.interface';
import { ServicesPageService } from '../../services/services-page.service';

@Component({
  selector: 'app-services-model',
  templateUrl: './services-model.component.html',
  styleUrls: ['./services-model.component.scss']
})
export class ServicesModelComponent {
  servModelData$!:Observable<IDataMSD>;

  constructor( private serv:ServicesPageService){
   this.servModelData$=this.serv.modelServ$;
      }

}
