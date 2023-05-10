import { Component } from '@angular/core';
import { BannerModel } from '../models/banner.model';
import { stepsModel } from '../models/steps.model';

@Component({
  selector: 'app-software-development',
  templateUrl: './software-development.component.html',
  styleUrls: ['./software-development.component.scss'],
})
export class SoftwareDevelopmentComponent {
  banner: BannerModel = new BannerModel(
    'https://www.mdp.com.pe/wp-content/uploads/2017/05/desarrollo_software.jpg',
    [
      'Desarrollo de Software',
      'Nuestra promesa: Soluciones tecnológicas disruptivas que generan un valor real a su negocio.',
    ],
    'Nuestra promesa es entregar soluciones de software con un enfoque diferente, aplicando las mejores prácticas e integrando distintas técnicas que nos permitan superar las expectativas de nuestros clientes y que generen un valor real en las organizaciones y sus clientes en el menor tiempo posible.'
  );

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
}
