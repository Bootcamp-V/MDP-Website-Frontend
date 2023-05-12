import { Component } from '@angular/core';
import { DataAgilPC } from '../../models/agilePathConsulting.interface';
import { Observable } from 'rxjs';
import { ServicesPageService } from '../../services/services-page.service';

@Component({
  selector: 'app-agile-path',
  templateUrl: './agile-path.component.html',
  styleUrls: ['./agile-path.component.scss']
})
export class AgilePathComponent {
  dataPathConsulting$!:Observable<DataAgilPC>;

  constructor( private serv:ServicesPageService){
   this.dataPathConsulting$=this.serv.agilPathConsServ$;
      }
}
