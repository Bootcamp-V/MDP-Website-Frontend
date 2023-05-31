import { Injectable } from '@angular/core';
import { ITimeline } from '../models/timeline.interface';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TimelineService {

  constructor(private http: HttpClient) { }

    getTimeline(){
    return this.http.get<ITimeline>(environment.baseUrl+'/api/timeline-services?populate=*');
  }
}

