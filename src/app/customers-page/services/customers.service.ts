import { Injectable } from '@angular/core';
import { ICustomers } from '../model/customers.interface';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  constructor(private http: HttpClient) { }

  getInfoCustomers(tipo:string) {
    return this.http.get<ICustomers>(environment.baseUrl + '/api/customers?populate=*&filters[type][$eq]=' + tipo);
  }
}



