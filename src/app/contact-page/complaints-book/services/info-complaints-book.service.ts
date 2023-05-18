import { Injectable } from '@angular/core';
import { IInfoComplaintsBook } from '../../models/info-complaints-book.interface';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InfoComplaintsBookService {

  constructor(private http: HttpClient) { }

   getInfoComplaintsBook(){
    return this.http.get<IInfoComplaintsBook>(environment.baseUrl+'/api/tittle-complaint-books?populate=*');
  }
  
}
