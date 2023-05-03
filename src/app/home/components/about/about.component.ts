import { Component, OnInit } from '@angular/core';
import { IAbout } from './models/about.model';
import { Observable } from 'rxjs';
import { AboutService } from './services/about.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  dataAbout$!: Observable<IAbout>;
  constructor(private serviceAbout: AboutService) {}
  ngOnInit() {
    this.dataAbout$ = this.serviceAbout.getAboutInfo();
  }
}
