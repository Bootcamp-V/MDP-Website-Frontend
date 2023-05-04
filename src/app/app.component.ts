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
    { url: 'https://www.mdp.com.pe/wp-content/uploads/2018/08/Portada.png' },
    { url: 'https://www.mdp.com.pe/wp-content/uploads/2017/05/Portada_MDP.jpg' },
    { url: 'https://www.mdp.com.pe/wp-content/uploads/2017/05/nosotros_MDPAgil.jpg' },
  ];
}
