import { Component } from '@angular/core';
import { BannerModel } from '../models/banner.model';
import { stepsModel } from '../models/steps.model';
import { InfoOffer, WeOffer } from '../models/we-offer-model';
import { ContactService } from '../models/contactService.model';

@Component({
  selector: 'app-software-testing',
  templateUrl: './software-testing.component.html',
  styleUrls: ['./software-testing.component.scss'],
})
export class SoftwareTestingComponent {
  banner: BannerModel = new BannerModel(
    'https://www.mdp.com.pe/wp-content/uploads/2017/05/Prueba-de-Software.jpg',
    [
      'Pruebas de Software',
      'Nuestra promesa: La calidad es una consecuencia de un gran trabajo y atención por los detalles.',
    ],
    'Hoy, la calidad es uno de los requisitos indispensables para el éxito de un producto, generar una experiencia de uso positiva en los usuarios facilita el incremento de la frecuencia de uso, por lo que cada detalle debe ser analizado cuidadosamente. '
  );

  steps: stepsModel = new stepsModel(
    ['https://cdn-icons-png.flaticon.com/512/45/45180.png'],
    '¿Cómo funciona?',
    'No existe una ruta estricta al desarrollar soluciones para las organizaciones, esto es una de las características que nos hace diferentes, la flexibilidad, sin embargo, si seguimos patrones que nos permiten identificar qué modelo de servicio se adapta más a su necesidad específica, sea una solución puntual o un área específica (TI).',
    [
      'Reunion Inicial',
      'Analisis de las necesidades',
      'Presentacion al cliente',
    ],
    [
      'Todo empieza con una conversación, sea física o virtual en la que podamos conocerlos y entender el negocio y sus necesidades iniciales, los puntos de dolor que podemos ayudar a solucionar, lo que necesitan implementar o la gestión de la demanda.',
      'Nuestro equipo comercial junto a un equipo de especialistas analizan la información brindada en la reunión realizando investigaciones complementarias para definir la solución y bajo qué modelo (fábrica / proyecto) y sobre que marco (ágil / tradicional) se podría ejecutar para elaborar una estimación.',
      'Dependiendo de la solución, modelo y marco de trabajo seleccionado se realiza una presentación de nuestra propuesta o estimación para profundizar más sobre la alternativa seleccionada (alcance, tiempos y equipo necesario) para lograr acuerdos que nos lleven al inicio del servicio.',
    ]
  );


  offer:WeOffer = new WeOffer('¿Qué ofrecemos?',['Diferentes niveles de pruebas entre las cuales se encuentran Pruebas de aceptación, usuario, certificación, funcionales y no funcionales, integración, sistemas, diseño y usabilidad, regresión, unitarias, sistemas, diseño usabilidad y análisis de código.',
  'Trabajamos bajo dos modelos Fábricas de Testing y Proyectos.',
  'Preferimos realizar pruebas marcos ágiles, pero también las realizamos bajo un marco tradicional o cascada.',
  'Mapa de conocimiento, administramos el conocimiento a través de nuestra plataforma DOM, con el objetivo de poder mejorar el servicio en el tiempo.',
  'Completa visibilidad de nuestros procesos a través de nuestra plataforma DOM, finalista del concurso creatividad empresarial 2016',
  'Capacitaciones constantes, nos esforzamos por incrementar el conocimiento de nuestros colaboradores.'],[new InfoOffer('fa-magnifying-glass','+5','Fábricas de Pruebas de Software Activas'),
  new InfoOffer('fa-star','80%','de colaboradores certificados en ISTQB'),new InfoOffer('fa-user-large','+50','Especialistas en pruebas')]);



  lista:ContactService= new ContactService('Software más solicitado por nuestros clientes para ejecutar pruebas',['Selenium','SpiraTeam','Cucumber','Appium','SoapUI']);


}
