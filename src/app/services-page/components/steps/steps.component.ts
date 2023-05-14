import { Component} from '@angular/core';
import { DataStepsServices } from '../../models/stepsService.interface';
import { Observable } from 'rxjs';
import { ServicesPageService } from '../../services/services-page.service';

@Component({
  selector: 'app-steps',
  templateUrl: './steps.component.html',
  styleUrls: ['./steps.component.scss'],
})
export class StepsComponent {
  steeps$!:Observable<DataStepsServices>;

  constructor( private serv:ServicesPageService){
this.steeps$=this.serv.steepsServ$;
  }
//#000124

//#00b7e1

//#33c5e7

//#66d4ed
}
