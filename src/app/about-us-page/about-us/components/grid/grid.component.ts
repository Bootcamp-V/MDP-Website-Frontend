import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ICardsAboutUs } from 'src/app/about-us-page/models/cards-about-us.interface';
import { CardsAboutUsService } from 'src/app/about-us-page/services/cards-about-us.service';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit  {

  cards$!: Observable<ICardsAboutUs>

  constructor( private servicepage: CardsAboutUsService) {
    
  }

  ngOnInit():void{

    this.cards$= this.servicepage.getCardsAboutUs();
  }


}
