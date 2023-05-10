import { Component, Input } from '@angular/core';
import { BannerModel } from '../../models/banner.model';

@Component({
  selector: 'app-banner-new',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerServiceComponent {

  @Input() banner!:BannerModel;
  urlima="https://www.mdp.com.pe/wp-content/uploads/2017/05/servicios.jpg";


}
