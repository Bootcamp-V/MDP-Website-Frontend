import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ISocial } from '../models/social.interface';

@Injectable({
  providedIn: 'root'
})
export class SocialsService {

  constructor(private http: HttpClient) { }

  getSocials(){
    return this.http.get<ISocial>('http://localhost:1337/api/social-networks');
  }
}
