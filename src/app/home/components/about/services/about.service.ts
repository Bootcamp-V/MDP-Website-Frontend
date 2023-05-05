import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IAbout } from '../models/about.model';

@Injectable({
  providedIn: 'root',
})
export class AboutService {
  constructor(private http: HttpClient) {}
  getAboutInfo() {
    return this.http.get<IAbout>('http://localhost:1337/api/inicio-somos-mdps');
  }
}
