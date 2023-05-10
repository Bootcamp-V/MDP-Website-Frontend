import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPage } from '../models/page.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {

  constructor(private http: HttpClient) { }
  getPages() {
    return this.http.get<IPage>(environment.baseUrl+'/api/pages?populate=*');
  }

}
