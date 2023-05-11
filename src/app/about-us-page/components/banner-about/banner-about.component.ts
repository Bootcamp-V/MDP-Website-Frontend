import { Component, Input } from '@angular/core';
import { BannerAboutModel } from '../../models/banner-about.interface';
import { BannerModel } from '../../models/banner.model';

@Component({
  selector: 'app-banner-about',
  templateUrl: './banner-about.component.html',
  styleUrls: ['./banner-about.component.scss']
})
export class BannerAboutComponent {

  @Input() banner!:BannerAboutModel;
 
}
