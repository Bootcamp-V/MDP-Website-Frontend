import { Component } from '@angular/core';
import { BannerModel } from '../models/banner.model';

@Component({
  selector: 'app-services-main',
  templateUrl: './services-main.component.html',
  styleUrls: ['./services-main.component.scss']
})
export class ServicesMainComponent {

banner:BannerModel= new BannerModel ('https://www.mdp.com.pe/wp-content/uploads/2017/05/servicios.jpg',["Nuestros Servicios","Nuestra oferta de servicios está orientada a la innovación lineal, desarrollando constantemente mejoras en el servicio e incrementar la calidad de los entregables, eso es pensar diferente."],
[]);


}
