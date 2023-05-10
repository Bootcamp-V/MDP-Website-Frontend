import { Component } from '@angular/core';
import { BannerModel } from '../models/banner.model';
import { stepsModel } from '../models/steps.model';

@Component({
  selector: 'app-talent',
  templateUrl: './talent.component.html',
  styleUrls: ['./talent.component.scss'],
})
export class TalentComponent {
  banner: BannerModel = new BannerModel(
    'https://www.mdp.com.pe/wp-content/uploads/2017/05/talento.jpg',
    ['Talento', 'La persona correcta para el puesto correcto!'],
    'Nuestra promesa es simple, seleccionamos a los mejores perfiles en TI según sus requerimientos específicos, ofreciéndole liberarse de los procesos administrativos (selección, contratación y control) para enfocarse en lo más importante, incrementar la productividad de su empresa.'
  );

  steps: stepsModel = new stepsModel(
    ['https://cdn-icons-png.flaticon.com/512/45/45180.png'],
    '¿Cómo funciona?',
    'Nuestro método ha sido perfeccionado con la experiencia de más de 11 años que llevamos ofreciendo este servicio, llegando a completar los requerimientos en menos de 8 días útiles y todo de manera digital a través de nuestra plataforma DOM.',
    [
      'Requerimiento y cuestionario inicial',
      'Selección y reclutamiento',
      'Aprobación e inicio',
    ],
    [
      'Todo empieza con una necesidad, al contactarnos un service manager analizará el perfil y completará junto a usted un cuestionario que nos permita conocer en profundidad el perfil ideal para solucionar su necesidad.',
      'Con el cuestionario completo nuestros profesionales de reclutamiento seleccionarán a los candidatos ideales preparándoles una lista ideal de 1 a 3 postulantes para una entrevista personal, de los cuales podrá seleccionar uno o más de ellos.',
      'Finalizadas las entrevistas, usted podrá seleccionar el mejor candidato y nosotros nos encargamos de la contratación e inducción para que inicie el trabajo en el menor tiempo posible (sujeto a la disponibilidad del colaborador)',
    ]
  );
}
