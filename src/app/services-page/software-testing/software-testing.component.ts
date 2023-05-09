import { Component } from '@angular/core';
import { BannerModel } from '../models/banner.model';

@Component({
  selector: 'app-software-testing',
  templateUrl: './software-testing.component.html',
  styleUrls: ['./software-testing.component.scss']
})
export class SoftwareTestingComponent {

  banner:BannerModel= new BannerModel ('https://www.mdp.com.pe/wp-content/uploads/2017/05/Prueba-de-Software.jpg',["Pruebas de Software","Nuestra promesa: La calidad es una consecuencia de un gran trabajo y atención por los detalles."],
  "Hoy, la calidad es uno de los requisitos indispensables para el éxito de un producto, generar una experiencia de uso positiva en los usuarios facilita el incremento de la frecuencia de uso, por lo que cada detalle debe ser analizado cuidadosamente. ");
}
