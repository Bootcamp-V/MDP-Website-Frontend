import { Component } from '@angular/core';
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

      boxColor( i: number):string
      {
        const colors=["#000124","#00b7e1","#33c5e7","#66d4ed","#000124"];
        const index=(i+1)%5;

        return colors[index];
      }

      triangleColor( a: number):string
      {
        const colors=["#000124","#00b7e1","#33c5e7","#66d4ed"];
        const index=(a)%5;

        return colors[index];
      }


}
