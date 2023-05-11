import { Component } from '@angular/core';
import { BannerModel } from '../models/banner.model';
import { stepsModel } from '../models/steps.model';
import { InfoOffer, WeOffer } from '../models/we-offer-model';
import { ContactService } from '../models/contactService.model';

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


  offer:WeOffer = new WeOffer('¿Qué ofrecemos?',['Búsqueda, selección y contratación personal de acuerdo a sus requerimientos.',
  'Encuestas de Satisfacción realizadas periódicamente para medir la efectividad de nuestro servicio y talento.',
  'Mapa de conocimiento, administramos el conocimiento de gestión a través de nuestra plataforma DOM, con el objetivo de poder mantener una continuidad en el servicio si se da el cambio de personal.',
  'Seguimiento y gestión administrativa (control de asistencia, seguimiento y control de actividades, reportes de gestión) a través de nuestro aplicativo AppDOM',
  'Capacitaciones constantes, nos esforzamos por incrementar el conocimiento de nuestros colaboradores.',
  'Flexibilidad para poder cambiar el perfil de acuerdos a las necesidades del negocio.'],[new InfoOffer('fa-lock','+30','Empresas confían en nosotros'),
  new InfoOffer('fa-clock','+26,000','de horas mensuales'),new InfoOffer('fa-user-large','+160','Colaboradores en el puesto correcto')]);

  lista:ContactService= new ContactService('Perfiles más solicitados en los últimos 30 días',['Analista Programador .NET','Analista Programador COBOL','Consultor SAP','Analista QA','Analista Programador Móviles']);

}
