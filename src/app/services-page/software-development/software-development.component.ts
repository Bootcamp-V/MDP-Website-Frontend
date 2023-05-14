import { Component } from '@angular/core';
import { WeOffer } from '../models/we-offer-model';
import { IDataBP } from '../models/bannerPages.interface';
import { ServicesPageService } from '../services/services-page.service';
import { map } from 'rxjs';
import { DataOffer } from '../models/weOfferServices.model.interface';
import { DataInfoService } from '../models/infoContactService.interfrace';
import { IDataMSD } from '../models/modeServices.interface';
import { DataStepsServices } from '../models/stepsService.interface';
import { BannerPagesService } from 'src/app/shared/banner-pages/banner-pages.service';

@Component({
  selector: 'app-software-development',
  templateUrl: './software-development.component.html',
  styleUrls: ['./software-development.component.scss'],
})

export class SoftwareDevelopmentComponent {
  page: string = "Software Development";

  banner!: IDataBP;
  weOffer!: WeOffer;
  listoffer!: string[];
  dataOffer!: DataOffer;
  dataInfoServ!: DataInfoService;
  dataModelServ!: IDataMSD;
  dataSteps!: DataStepsServices;

  constructor(private serv: ServicesPageService,private servicio:BannerPagesService) {

  }


  ngOnInit() {

    this.getBannerPage();
    this.getoffers();
    this.getInfoContactService();
    this.getmodelsServices();
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


  getmodelsServices() {

    this.serv.getModelServices().pipe(
      map((res) => {
        for (let i of res.data) {

          if (i.attributes.page == this.page) {
            this.dataModelServ = i;
          }

        }
      })
    ).subscribe(
      res => {
        this.serv.modelServ$.next(this.dataModelServ);
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
