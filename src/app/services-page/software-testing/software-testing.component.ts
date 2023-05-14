import { map } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { IDataBP } from '../models/bannerPages.interface';
import { ServicesPageService } from '../services/services-page.service';
import { DataOffer } from '../models/weOfferServices.model.interface';
import { DataInfoService } from '../models/infoContactService.interfrace';
import { IDataMSD } from '../models/modeServices.interface';
import { DataStepsServices } from '../models/stepsService.interface';
import { BannerPagesService } from 'src/app/shared/banner-pages/banner-pages.service';

@Component({
  selector: 'app-software-testing',
  templateUrl: './software-testing.component.html',
  styleUrls: ['./software-testing.component.scss'],
})
export class SoftwareTestingComponent implements OnInit {



  page: string = "Software Testing";
  banner!: IDataBP;
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
