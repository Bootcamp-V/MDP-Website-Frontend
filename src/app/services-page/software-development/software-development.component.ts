import { Component } from '@angular/core';
import { BannerModel } from '../models/banner.model';

@Component({
  selector: 'app-software-development',
  templateUrl: './software-development.component.html',
  styleUrls: ['./software-development.component.scss']
})
export class SoftwareDevelopmentComponent {

banner:BannerModel= new BannerModel ('https://www.mdp.com.pe/wp-content/uploads/2017/05/desarrollo_software.jpg',["Desarrollo de Software","Nuestra promesa: Soluciones tecnológicas disruptivas que generan un valor real a su negocio."],
"Nuestra promesa es entregar soluciones de software con un enfoque diferente, aplicando las mejores prácticas e integrando distintas técnicas que nos permitan superar las expectativas de nuestros clientes y que generen un valor real en las organizaciones y sus clientes en el menor tiempo posible.");
}
