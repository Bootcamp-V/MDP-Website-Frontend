import { Component, OnInit } from '@angular/core';
import { BannerModel } from '../models/banner.model';
import { stepsModel } from '../models/steps.model';
import { InfoOffer, WeOffer } from '../models/we-offer-model';
import { ContactService } from '../models/contactService.model';
import { IDescriptionBannerPages, ITitleBannerPages } from '../models/bannerPages.interface';
import { ServicesPageService } from '../services/services-page.service';

@Component({
  selector: 'app-talent',
  templateUrl: './talent.component.html',
  styleUrls: ['./talent.component.scss'],
})
export class TalentComponent implements OnInit{

  titles!:ITitleBannerPages;
  description!:IDescriptionBannerPages;
  banner!:BannerModel;

  constructor(private serv:ServicesPageService){

  }


  ngOnInit() {
    this.serv.getBannerPage().subscribe((res) => {

        this.titles=res.data[4].attributes.title_banner_pages;
        this.description=res.data[4].attributes.description_banner_pages;

this.banner= new BannerModel(res.data[4].attributes.img.data[0].attributes.formats.large.url,[this.titles.data[0].attributes.title,this.titles.data[1].attributes.title],
  [this.description.data[0].attributes.text]);
    });
  }





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
