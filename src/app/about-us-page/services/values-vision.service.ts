import { Injectable } from '@angular/core';
import { IValuesVision } from '../models/values-vision.interface';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ValuesVisionService {

  constructor(private http: HttpClient) { }


  getValuesVision(){
    return this.http.get<IValuesVision>(environment.baseUrl+'/api/values-visions?populate=*');
  }
}
