import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ISectors } from '../models/sectors.model';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class SectorsService {
  constructor(private http: HttpClient) {}
  getSectorsInfo() {
    return this.http.get<ISectors>(
      environment.devUrl+'/api/sectors?populate=*'
    );
  }
}
