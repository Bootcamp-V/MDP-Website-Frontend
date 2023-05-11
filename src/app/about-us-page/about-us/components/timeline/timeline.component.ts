import { Component } from '@angular/core';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent {
  boxes = [
    { title: '11 años creciendo' ,subtitle: 'A lo largo de 11 años hemos acumulado una gran experiencia junto a nuestros <br> clientes, lo que nos ha permitido tener un crecimiento sostenido, contribuir <br> con la formación de grandes profesionales y crear una empresa sólida y <br> preparada para asumir grandes retos.' },
    
  ];

}
