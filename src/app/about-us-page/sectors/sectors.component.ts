import { Component } from '@angular/core';

@Component({
  selector: 'app-sectors',
  templateUrl: './sectors.component.html',
  styleUrls: ['./sectors.component.scss'],
})
export class SectorsComponent {
  arr = [
    {
      name: 'Banca',
      image:
        'https://www.mdp.com.pe/wp-content/uploads/2017/05/sector_banca.jpg',
    },
    {
      name: 'Aseguradoras AFPs',
      image:
        'https://www.mdp.com.pe/wp-content/uploads/2017/05/sector_aseguradoras.jpg',
    },
    {
      name: 'Telecomunicaciones',
      image:
        'https://www.mdp.com.pe/wp-content/uploads/2017/05/sector_telecomunicaciones.jpg',
    },
    {
      name: 'Retail',
      image:
        'https://www.mdp.com.pe/wp-content/uploads/2017/05/sector_retail.jpg',
    },
  ];
}
