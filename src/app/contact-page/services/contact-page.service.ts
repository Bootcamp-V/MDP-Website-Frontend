import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { IcontacUs, IdataContactUs } from '../models/contactUs.interface.model';
import { environment } from 'src/environments/environment'


@Injectable({
  providedIn: 'root'
})
export class ContactPageService {

  contactUs$!:Subject<IdataContactUs>

  constructor( private http:HttpClient) {

    this.contactUs$=new Subject();
  }

  getContactUs():Observable<IcontacUs>{
    return this.http.get<IcontacUs>( environment.baseUrl+'/api/contact-uses?populate=*')
  }
}
