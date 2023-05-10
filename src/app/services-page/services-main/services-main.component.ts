import { Component, OnInit } from '@angular/core';
import { BannerModel } from '../models/banner.model';
import { ServicesPageService } from '../services/services-page.service';

@Component({
  selector: 'app-services-main',
  templateUrl: './services-main.component.html',
  styleUrls: ['./services-main.component.scss']
})
export class ServicesMainComponent implements OnInit{

  constructor(private serv:ServicesPageService){

  }


  ngOnInit() {
    this.serv.getBannerPage().subscribe((res) => {

        console.log(res);
    });
  }

banner:BannerModel= new BannerModel ('https://www.mdp.com.pe/wp-content/uploads/2017/05/servicios.jpg',["Nuestros Servicios","Nuestra oferta de servicios está orientada a la innovación lineal, desarrollando constantemente mejoras en el servicio e incrementar la calidad de los entregables, eso es pensar diferente."],
"");


getInfoBannerPage(){


}



}
