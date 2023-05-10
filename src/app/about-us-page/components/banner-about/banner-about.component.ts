import { Component, Input } from '@angular/core';
import { BannerModel } from '../../models/banner.model';

@Component({
  selector: 'app-banner-about',
  templateUrl: './banner-about.component.html',
  styleUrls: ['./banner-about.component.scss']
})
export class BannerAboutComponent {
  @Input() banner!:BannerModel;
}
