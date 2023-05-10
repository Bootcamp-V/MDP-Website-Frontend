import { Component } from '@angular/core';
import { BannerModel } from '../models/banner.model';

@Component({
  selector: 'app-certifications',
  templateUrl: './certifications.component.html',
  styleUrls: ['./certifications.component.scss']
})
export class CertificationsComponent {
  banner: BannerModel = new BannerModel(
    'https://www.mdp.com.pe/wp-content/uploads/2017/05/nosotros_Certificaciones.jpg',
    [
      'Certificaciones',
      'Tenemos un fuerte compromiso por la calidad, por ese motivo constantemente buscamos mejorar nuestros procesos y validarlos a través de importantes certificaciones internacionales, tanto para nuestra empresa como nuestros colaboradores.',
    ],

  );

}
