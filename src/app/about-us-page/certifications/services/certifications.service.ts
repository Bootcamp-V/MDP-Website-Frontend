import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICertifications } from '../models/certifications.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CertificationsService {
  constructor(private http: HttpClient) {}

  getInfoCertification() {
    return this.http.get<ICertifications>(
      environment.baseUrl + '/api/servicios'
    );
  }
}
