import { map } from 'rxjs';
import { Component } from '@angular/core';
import { IDataBP } from '../models/bannerPages.interface';
import { ServicesPageService } from '../services/services-page.service';
import { DataIC } from '../models/infoContactConsulting.interface';
import { DataBussinesService } from '../models/bussinesService.interface';
import { IDataPlanC } from '../models/PlanConsulting.interface';
import { DataIagilTr } from '../models/AgilTransformationConsulting';
import { DataAgilPC } from '../models/agilePathConsulting.interface';
import { ITapeServicesConsulting } from '../models/tapeServicesConsulting.interface';
import { BannerPagesService } from 'src/app/shared/banner-pages/banner-pages.service';

@Component({
  selector: 'app-consulting',
  templateUrl: './consulting.component.html',
  styleUrls: ['./consulting.component.scss']
})
export class ConsultingComponent {

  banner!: IDataBP;
  dataConsulting!: DataIC;
  dataBussinesS!: DataBussinesService;
  dataPlanConsulting!: IDataPlanC;
  dataAgilTransCons!: DataIagilTr;
  dataAgilPathCons!: DataAgilPC;
  dataTapeConsulting!: ITapeServicesConsulting;

  constructor(private serv: ServicesPageService,private servicio:BannerPagesService) {

  }

  ngOnInit() {

    this.getBannerPage();
    this.getInfoContactConsultingService();
    this.getBussinesService();
    this.getPlanConsulting();
    this.getAgilTransCons();
    this.getAgilPathCons();
    this.getTapeConsul();

  }


  getBannerPage() {
    this.servicio.getBannerPage().pipe(
      map((res) => {
        for (let i of res.data) {

          if (i.attributes.page == "Consulting") {
            this.banner = i;
          }

        }
      })

    ).subscribe((res) => {
      this.servicio.bannerPages$.next(this.banner);
    });
  }


  getInfoContactConsultingService() {

    this.serv.getInfoContactConsultingServ().pipe(
      map((res) => {
        this.dataConsulting = res.data[0];
        return res;
      })

    ).subscribe(
      res => {

        this.serv.infoConsultingServ$.next(this.dataConsulting);
      }


    );

  }


  getBussinesService() {

    this.serv.getBussinesServices().pipe(
      map((res) => {
        this.dataBussinesS = res.data[0];
        return res;
      })

    ).subscribe(
      res => {

        this.serv.bussinesServ$.next(this.dataBussinesS);
      }


    );

  }




  getPlanConsulting() {

    this.serv.getPlanConsulting().pipe(
      map((res) => {
        this.dataPlanConsulting = res.data[0];
        return res;
      })

    ).subscribe(
      res => {

        this.serv.planConsulServ$.next(this.dataPlanConsulting);
      }


    );

  }




  getAgilTransCons() {

    this.serv.getAgilTransConsul().pipe(
      map((res) => {
        this.dataAgilTransCons = res.data[0];
        return res;
      })

    ).subscribe(
      res => {

        this.serv.agilTransConsServ$.next(this.dataAgilTransCons);
      }


    );

  }



  getAgilPathCons() {

    this.serv.getAgilPathConsul().pipe(
      map((res) => {
        this.dataAgilPathCons = res.data[0];
        return res;
      })

    ).subscribe(
      res => {

        this.serv.agilPathConsServ$.next(this.dataAgilPathCons);
      }


    );

  }



  getTapeConsul() {

    this.serv.getTapeServConsul().pipe(
      map((res) => {
        this.dataTapeConsulting = res;
        return res;
      })

    ).subscribe(
      res => {

        this.serv.tapeConsuServ$.next(this.dataTapeConsulting);
      }


    );

  }



}
