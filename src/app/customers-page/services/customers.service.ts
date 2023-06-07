import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICustomers } from '../models/customers.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  constructor(private http: HttpClient) { }

  getInfoCustomers(tipo:string) {
    return this.http.get<ICustomers>(environment.baseUrl + '/api/customers?populate=*&filters[type][$eq]=' + tipo);
  }
}
