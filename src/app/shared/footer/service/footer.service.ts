import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IFooter } from '../model/footer.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FooterService {


  constructor(private http:HttpClient) { }



getInfoFooter(){
  return this.http.get<IFooter>(environment.baseUrl+"/api/footers?populate=*");
}

}
