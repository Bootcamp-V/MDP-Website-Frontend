import { Injectable } from '@angular/core';
import { IContainerAbout } from '../models/container-about.interface';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContainerAboutService {

  constructor(private http: HttpClient) { }


  getContainerAbout(){
    return this.http.get<IContainerAbout>(environment.devUrl+'/api/container-abouts?populate=*');
  }
  

}
