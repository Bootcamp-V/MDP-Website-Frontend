import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { IDataBP } from 'src/app/services-page/models/bannerPages.interface';
import { BannerPagesService } from 'src/app/shared/banner-pages/banner-pages.service';
import { IdataContactUs } from '../models/contactUs.interface.model';
import { ContactPageService } from '../services/contact-page.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit{
  page: string = "Contact Us";
  banner!: IDataBP;
  dataCU!:IdataContactUs;


  constructor(private servicio:BannerPagesService,private serv:ContactPageService) {

  }


  ngOnInit() {

    this.getBannerPage();
    this.getContactUs();

  }

  getContactUs(){

this.serv.getContactUs().subscribe(
  (res)=>{
    this.serv.contactUs$.next(res.data[0]);
});



  }


  getBannerPage() {
    this.servicio.getBannerPage().pipe(
      map((res) => {
        for (let i of res.data) {

          if (i.attributes.page == this.page) {
            this.banner = i;
          }

        }
      })

    ).subscribe((res) => {
      this.servicio.bannerPages$.next(this.banner);
    });
  }






}
