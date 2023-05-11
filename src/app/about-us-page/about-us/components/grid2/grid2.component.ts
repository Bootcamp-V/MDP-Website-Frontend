import { Component } from '@angular/core';

@Component({
  selector: 'app-grid2',
  templateUrl: './grid2.component.html',
  styleUrls: ['./grid2.component.scss']
})
export class Grid2Component {
  boxes = [
    { title: 'Nuestra Historia' ,subtitle: 'Hemos recorrido un <br> largo camino, te invitamo <br>  a recorrerlo' },
    { title: 'Nuestro Modelo de Negocio', subtitle: 'Descubre porque decidimos <br> ser una empresa Bi Modal <br> y que implica este modelo' },
    { title: 'Nuestra Organización',  subtitle: 'Somos una empresa <br> BiModal <br> con un fuerte enfoque en <br> nuestros clientes'  },

  ];

}
