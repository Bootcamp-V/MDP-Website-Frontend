import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IAbout } from '../models/about.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AboutService {
  constructor(private http: HttpClient) {}
  getAboutInfo() {
    return this.http.get<IAbout>(environment.baseUrl+'/api/inicio-somos-mdps');
  }
}
