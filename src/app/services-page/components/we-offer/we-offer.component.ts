import { Component, Input } from '@angular/core';
import { WeOffer } from '../../models/we-offer-model';

@Component({
  selector: 'app-we-offer',
  templateUrl: './we-offer.component.html',
  styleUrls: ['./we-offer.component.scss']
})
export class WeOfferComponent {
  @Input() offer!:WeOffer;


}
