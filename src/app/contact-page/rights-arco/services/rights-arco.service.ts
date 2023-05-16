import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ISectionRightArco } from '../models/rights-arco.interface';

@Injectable({
  providedIn: 'root'
})
export class RightsArcoService {

  constructor(private http: HttpClient) { 
  }
  getSectionsRightsArco(){
    return this.http.get<ISectionRightArco>(environment.baseUrl+'/api/section-rights-arcos?populate=*');
  }
}
