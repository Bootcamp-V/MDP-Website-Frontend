import { Component } from '@angular/core';
import { ServicesPageService } from '../../services/services-page.service';
import { DataIagilTr } from '../../models/AgilTransformationConsulting';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-agile-business-trans',
  templateUrl: './agile-business-trans.component.html',
  styleUrls: ['./agile-business-trans.component.scss']
})
export class AgileBusinessTransComponent {
  dataAgilConsulting$!:Observable<DataIagilTr>;

  constructor( private serv:ServicesPageService){
   this.dataAgilConsulting$=this.serv.agilTransConsServ$;
      }
}
