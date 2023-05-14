import { Component, OnInit } from '@angular/core';
import { IDataBP } from '../models/bannerPages.interface';
import { ServicesPageService } from '../services/services-page.service';
import { map } from 'rxjs';
import { DataOffer } from '../models/weOfferServices.model.interface';
import { DataInfoService } from '../models/infoContactService.interfrace';
import { DataStepsServices } from '../models/stepsService.interface';
import { BannerPagesService } from 'src/app/shared/banner-pages/banner-pages.service';

@Component({
  selector: 'app-talent',
  templateUrl: './talent.component.html',
  styleUrls: ['./talent.component.scss'],
})
export class TalentComponent implements OnInit {
  page: string = "Talent";
  banner!: IDataBP;
  listoffer!: string[];
  dataOffer!: DataOffer;
  dataInfoServ!: DataInfoService;
  dataSteps!: DataStepsServices;

  constructor(private serv: ServicesPageService,private servicio:BannerPagesService) {

  }


  ngOnInit() {
    this.getBannerPage();
    this.getoffers();
    this.getInfoContactService();
    this.getStepsService();
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



  getoffers() {

    this.serv.getWeOfferServices().pipe(
      map((res) => {
        for (let i of res.data) {

          if (i.attributes.page == this.page) {
            this.dataOffer = i;
          }
        }
      })

    ).subscribe(
      res => {
        this.serv.weOff$.next(this.dataOffer);
      }

    );
  }


  getInfoContactService() {

    this.serv.getInfoContactServices().pipe(
      map((res) => {
        for (let i of res.data) {

          if (i.attributes.page == this.page) {
            this.dataInfoServ = i;
          }

        }
      })

    ).subscribe(
      res => {
        this.serv.infoContactService$.next(this.dataInfoServ);
      }


    );

  }



  getStepsService() {

    this.serv.getSteepsServices().pipe(
      map((res) => {
        for (let i of res.data) {

          if (i.attributes.page == this.page) {
            this.dataSteps = i;
          }

        }
      })

    ).subscribe(
      res => {
        this.serv.steepsServ$.next(this.dataSteps);
      }


    );

  }




}
