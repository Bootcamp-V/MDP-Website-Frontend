import { Component } from '@angular/core';
import { BannerModel } from '../models/banner.model';
import { stepsModel } from '../models/steps.model';
import { InfoOffer, WeOffer } from '../models/we-offer-model';
import { ContactService } from '../models/contactService.model';
import { IDescriptionBannerPages, ITitleBannerPages } from '../models/bannerPages.interface';
import { ServicesPageService } from '../services/services-page.service';

@Component({
  selector: 'app-software-development',
  templateUrl: './software-development.component.html',
  styleUrls: ['./software-development.component.scss'],
})
export class SoftwareDevelopmentComponent {



  titles!:ITitleBannerPages;
  description!:IDescriptionBannerPages;
  banner!:BannerModel;

  constructor(private serv:ServicesPageService){

  }


  ngOnInit() {
    this.serv.getBannerPage().subscribe((res) => {
        this.titles=res.data[1].attributes.title_banner_pages;
        this.description=res.data[1].attributes.description_banner_pages;

this.banner= new BannerModel(res.data[1].attributes.img.data[0].attributes.formats.large.url,[this.titles.data[0].attributes.title,this.titles.data[1].attributes.title],
  [this.description.data[0].attributes.text]);
  this.serv.bannerPages$.next(this.banner);
    });


  }




  steps: stepsModel = new stepsModel(
    ['https://cdn-icons-png.flaticon.com/512/45/45180.png'],
    '¿Cómo funciona?',
    'No existe una ruta estricta al desarrollar soluciones para las organizaciones, esto es una de las características que nos hace diferentes, la flexibilidad, sin embargo, si seguimos patrones que nos permiten identificar qué modelo de servicio se adapta más a su necesidad específica, sea una solución puntual o un área específica (TI).',
    [
      'Reunion Inicial',
      'Analisis de las necesidades',
      'Presentacion e inicio del servicio',
    ],
    [
      'Todo empieza con una conversación, sea física o virtual en la que podamos conocerlos y entender el negocio y sus necesidades iniciales, los puntos de dolor que podemos ayudar a solucionar, lo que necesitan implementar o la gestión de la demanda.',
      'Nuestro equipo comercial junto a un equipo de especialistas analizan la información brindada en la reunión realizando investigaciones complementarias para definir la solución y bajo qué modelo (fábrica / proyecto) y sobre que marco (ágil / tradicional) se podría ejecutar para elaborar una estimación.',
      'Dependiendo de la solución, modelo y marco de trabajo seleccionado se realiza una presentación de nuestra propuesta o estimación para profundizar más sobre la alternativa seleccionada (alcance, tiempos y equipo necesario) para lograr acuerdos que nos lleven al inicio del servicio.',
    ]
  );



offer:WeOffer = new WeOffer('¿Qué ofrecemos?',['Desarrollo a medida de soluciones de software.','Trabajamos bajo dos modelos: Fábricas de Software y Proyectos.',
'Preferimos desarrollar soluciones sobre marcos ágiles, pero también podemos realizarlos bajo un marco tradicional o cascada.',
'Mapa de conocimiento, administramos el conocimiento a través de nuestra plataforma DOM, con el objetivo de poder mejorar el servicio en el tiempo.',
'Completa visibilidad de nuestros procesos a través de nuestra plataforma DOM, finalista del concurso creatividad empresarial 2016',
'Capacitaciones constantes, nos esforzamos por incrementar el conocimiento de nuestros colaboradores.'],[new InfoOffer('fa-folder-open','+10','Fábricas activas'),
new InfoOffer('fa-gear','+50','Proyectos al año'),new InfoOffer('fa-user-large','+280','Desarrolladores')]);


lista:ContactService= new ContactService('Lenguajes de programación con los que más trabajamos',['Java','.NET','COBOL','SAP','Android/ IOS']);


}
