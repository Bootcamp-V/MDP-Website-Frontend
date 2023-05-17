import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ComplaintsBookService {

  constructor(private http: HttpClient) { }
  postComplaintInfo( data:Object){
    return this.http.post(environment.baseUrl+'/api/complaints-book-infos',data,{responseType: 'text'});
  }

}
