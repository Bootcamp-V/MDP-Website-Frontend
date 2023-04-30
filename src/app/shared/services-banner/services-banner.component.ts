import { Component, OnInit } from '@angular/core';
import { ServiciosService } from './serviceBanner/servicios.service';
import { IDataServices, IServices } from './models/service.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-services-banner',
  templateUrl: './services-banner.component.html',
  styleUrls: ['./services-banner.component.scss'],
})
export class ServicesBannerComponent implements OnInit {

  services$!:Observable<IServices>;

constructor(private serv: ServiciosService){

}

  ngOnInit(): void {
  this.services$=this.serv.getInfoService();
  }


}
