import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IValuesVision } from 'src/app/about-us-page/models/values-vision.interface';
import { ValuesVisionService } from 'src/app/about-us-page/services/values-vision.service';

@Component({
  selector: 'app-our-values',
  templateUrl: './our-values.component.html',
  styleUrls: ['./our-values.component.scss']
})
export class OurValuesComponent implements OnInit {
  values$!: Observable<IValuesVision>

  constructor( private servicepage: ValuesVisionService) {
    
  }

  ngOnInit():void{

    this.values$= this.servicepage.getValuesVision();
  }
}
