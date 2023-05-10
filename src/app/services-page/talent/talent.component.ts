import { Component } from '@angular/core';
import { BannerModel } from '../models/banner.model';

@Component({
  selector: 'app-talent',
  templateUrl: './talent.component.html',
  styleUrls: ['./talent.component.scss']
})
export class TalentComponent {

  banner:BannerModel= new BannerModel ('https://www.mdp.com.pe/wp-content/uploads/2017/05/talento.jpg',["Talento","La persona correcta para el puesto correcto!"],
  "Nuestra promesa es simple, seleccionamos a los mejores perfiles en TI según sus requerimientos específicos, ofreciéndole liberarse de los procesos administrativos (selección, contratación y control) para enfocarse en lo más importante, incrementar la productividad de su empresa.");


}
