import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPage } from '../models/page.interface';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {

  constructor(private http: HttpClient) { }
  getPages() {
    return this.http.get<IPage>('http://localhost:1337/api/pages?populate=*');
  }

}
