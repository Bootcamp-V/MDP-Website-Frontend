import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ICardsAboutUs } from '../models/cards-about-us.interface';

@Injectable({
  providedIn: 'root'
})
export class CardsAboutUsService {

  constructor(private http: HttpClient) { }

  getCardsAboutUs(){
    return this.http.get<ICardsAboutUs>(environment.devUrl+'/api/cards-abouts?populate=*');
  }
  
}
