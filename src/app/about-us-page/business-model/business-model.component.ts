import { Component } from '@angular/core';
import { BannerAboutModel } from '../models/banner-about.interface';

@Component({
  selector: 'app-business-model',
  templateUrl: './business-model.component.html',
  styleUrls: ['./business-model.component.scss']
})
export class BusinessModelComponent {
  banner: BannerAboutModel = new BannerAboutModel('https://www.mdp.com.pe/wp-content/uploads/2017/05/nosotros_ModeloNegocio.jpg',['NUESTRO MODELO DE NEGOCIO'],'Nuestro modelo de negocio está orientado a evolucionar constantemente nuestras capacidades a través de la innovación, la investigación y las nuevas tecnologías teniendo como base la excelencia operacional.');

}
