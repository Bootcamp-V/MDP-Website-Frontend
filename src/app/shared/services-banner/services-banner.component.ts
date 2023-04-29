import { Component, OnInit } from '@angular/core';
import { ServiciosService } from './serviceBanner/servicios.service';

@Component({
  selector: 'app-services-banner',
  templateUrl: './services-banner.component.html',
  styleUrls: ['./services-banner.component.scss'],
})
export class ServicesBannerComponent implements OnInit {

  nombre!: string;

constructor(private serv: ServiciosService){

}



  ngOnInit(): void {
  this.serv.getInfoService().subscribe(
  (res)=>{
    console.log(res);
    this.nombre=res.data[0].attributes.name;
    console.log(this.nombre);
  }
  );
  }





}
