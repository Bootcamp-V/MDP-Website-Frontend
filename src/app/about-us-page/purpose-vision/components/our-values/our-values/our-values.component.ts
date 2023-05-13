import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IAboutSubPage } from 'src/app/about-us-page/models/about-sub-page.interface';
import { IValuesVision } from 'src/app/about-us-page/models/values-vision.interface';
import { AboutSubPageService } from 'src/app/about-us-page/services/about-sub-page.service';
import { ValuesVisionService } from 'src/app/about-us-page/services/values-vision.service';

@Component({
  selector: 'app-our-values',
  templateUrl: './our-values.component.html',
  styleUrls: ['./our-values.component.scss']
})
export class OurValuesComponent implements OnInit {
  values$!: Observable<IValuesVision>
  subpage$!:Observable<IAboutSubPage>

  constructor( private servicepage: ValuesVisionService, private serv:AboutSubPageService) {
    
  }

  ngOnInit():void{
    this.subpage$= this.serv.getAboutSubPages('VisionAndPurpose');
    this.values$= this.servicepage.getValuesVision();
  }
}
