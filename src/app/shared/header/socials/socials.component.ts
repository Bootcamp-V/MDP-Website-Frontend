import { Component, OnInit } from '@angular/core';
import { SocialsService } from './services/socials.service';
import { IDataSocials } from './models/social.interface';
@Component({
  selector: 'app-socials',
  templateUrl: './socials.component.html',
  styleUrls: ['./socials.component.scss']
})
export class SocialsComponent implements OnInit {
 
  socials_list!:IDataSocials[];


  constructor(private serv: SocialsService){

  }
  ngOnInit(): void {
    this.serv.getSocials().subscribe((res) =>{

       this.socials_list = res.data
        
      console.log(res);   
     
    } );
  }
}
