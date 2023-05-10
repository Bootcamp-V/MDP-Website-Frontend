import { Component } from '@angular/core';
import { BannerModel } from '../models/banner.model';

@Component({
  selector: 'app-consulting',
  templateUrl: './consulting.component.html',
  styleUrls: ['./consulting.component.scss']
})
export class ConsultingComponent {
  banner:BannerModel= new BannerModel ('https://www.mdp.com.pe/wp-content/uploads/2017/05/consultoria-1.jpg',["Consultoría","Nuestra promesa: Ayudamos a su organización a dar el siguiente paso. Ser una empresa Bi Modal nos permite investigar nuevas tendencias en el mundo y desarrollar estrategias para implementarlas en nuestro mercado, con la finalidad de generar nuevas capacidades y una ventaja competitiva a nuestros clientes."],
  "");
}
