import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IServices } from '../models/service.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {

  constructor(private http:HttpClient) { }



getInfoService(){
  return this.http.get<IServices>(environment.baseUrl+"/api/servicios");
}


}
