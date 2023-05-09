import { Component } from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent {
  boxes = [
    { title: 'Certificaciones' ,subtitle: 'Estamos comprometidos <br> con la calidad, descubre <br>  nuestras certificaciones' },
    { title: 'Nuestros clientes', subtitle: 'Contamos con un gran <br> portafolio de empresas líderes <br> en nuestro país' },
    { title: 'Sectores',  subtitle: 'Nos especializamos en <br> cuatro grandes sectores <br> descúbrelos'  },

  ];
}
