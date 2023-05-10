import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ISocial } from '../models/social.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SocialsService {

  constructor(private http: HttpClient) { }

  getSocials(){
    return this.http.get<ISocial>(environment.baseUrl+'/api/social-networks');
  }
}
