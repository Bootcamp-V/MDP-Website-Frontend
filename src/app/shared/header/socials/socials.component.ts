import { Component, OnInit } from '@angular/core';
import { SocialsService } from './services/socials.service';
import { ISocial } from './models/social.interface';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-socials',
  templateUrl: './socials.component.html',
  styleUrls: ['./socials.component.scss']
})
export class SocialsComponent implements OnInit {
 
    socials$!:Observable<ISocial>;

  constructor(private serv: SocialsService){
  
  }
  
    ngOnInit(): void {
    this.socials$=this.serv.getSocials();
    }
  
  
}
