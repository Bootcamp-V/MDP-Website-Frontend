import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IContainerAbout } from 'src/app/about-us-page/models/container-about.interface';
import { ContainerAboutService } from 'src/app/about-us-page/services/container-about.service';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {

  container$!:Observable<IContainerAbout>


  constructor( private servicepage: ContainerAboutService) {
    
  }

  ngOnInit():void{

    this.container$= this.servicepage.getContainerAbout();

  }

}
