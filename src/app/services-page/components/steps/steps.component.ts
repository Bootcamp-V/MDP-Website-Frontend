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
  boxColor( i: number):string
  {
    const colors=["#000124","#00b7e1","#33c5e7","#66d4ed"];
    const index=(i+1)%4;

    return colors[index];
  }

  triangleColor( a: number):string
  {
    const colors=["#000124","#00b7e1","#33c5e7"];
    const index=(a)%4;

    return colors[index];
  }
}
