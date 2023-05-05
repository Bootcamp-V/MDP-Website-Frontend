import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IHeader } from '../models/header.interface';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  constructor(private http: HttpClient) { }

  getHeader() {
    return this.http.get<IHeader>('http://localhost:1337/api/headers');
  }
}
