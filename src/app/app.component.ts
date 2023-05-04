import { Component } from '@angular/core';
import { SlideInterface } from './slider-images/types/slide.interface'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'MDP-Website';
  slides: SlideInterface[] = [
    { url: 'https://www.mdp.com.pe/wp-content/uploads/2018/08/Portada.png', title: 'beach' },
    { url: 'https://www.mdp.com.pe/wp-content/uploads/2017/05/Portada_MDP.jpg', title: 'boat' },
    { url: 'https://www.mdp.com.pe/wp-content/uploads/2017/05/nosotros_MDPAgil.jpg', title: 'forest' },
  ];
}
