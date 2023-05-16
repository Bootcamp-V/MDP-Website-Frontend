import { Component } from '@angular/core';
import { RightsArcoService } from './services/rights-arco.service';
import { Observable } from 'rxjs';
import { ISectionRightArco } from './models/rights-arco.interface';

@Component({
  selector: 'app-rights-arco',
  templateUrl: './rights-arco.component.html',
  styleUrls: ['./rights-arco.component.scss']
})
export class RightsArcoComponent {
  sections$!:Observable<ISectionRightArco>

  constructor(private serv: RightsArcoService) {
    this.sections$ = this.serv.getSectionsRightsArco();
  }
}
