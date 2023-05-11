import { Component, Input } from '@angular/core';
import { BannerInfo } from '../../models/banner-info.model';

@Component({
  selector: 'app-banner-info',
  templateUrl: './banner-info.component.html',
  styleUrls: ['./banner-info.component.scss']
})
export class BannerInfoComponent {
  @Input() banner!:BannerInfo;
}
