import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IHeader } from '../models/header.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  constructor(private http: HttpClient) { }

  getHeader() {
    return this.http.get<IHeader>(environment.baseUrl+'/api/headers');
  }
}
