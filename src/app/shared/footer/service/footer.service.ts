import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IFooter } from '../model/footer.model';

@Injectable({
  providedIn: 'root'
})
export class FooterService {


  constructor(private http:HttpClient) { }


getInfoFooter(){
  return this.http.get<IFooter>("http://localhost:1337/api/footers?populate=*");
}

}
