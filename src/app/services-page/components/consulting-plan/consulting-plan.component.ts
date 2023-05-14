import { Component } from '@angular/core';
import { IDataPlanC } from '../../models/PlanConsulting.interface';
import { Observable } from 'rxjs';
import { ServicesPageService } from '../../services/services-page.service';

@Component({
  selector: 'app-consulting-plan',
  templateUrl: './consulting-plan.component.html',
  styleUrls: ['./consulting-plan.component.scss']
})
export class ConsultingPlanComponent {
  planConsulting$!:Observable<IDataPlanC >;

  constructor( private serv:ServicesPageService){
   this.planConsulting$=this.serv.planConsulServ$;
      }
}
