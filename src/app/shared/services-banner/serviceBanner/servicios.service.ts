import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IServices } from '../models/service.interface';

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {

  constructor(private http:HttpClient) { }



getInfoService(){
  return this.http.get<IServices>("http://localhost:1337/api/servicios");
}


}
