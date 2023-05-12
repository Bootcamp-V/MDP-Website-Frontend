import { map } from 'rxjs';
import { Component } from '@angular/core';
import { BannerModel } from '../models/banner.model';
import { IDescriptionBannerPages, ITitleBannerPages } from '../models/bannerPages.interface';
import { ServicesPageService } from '../services/services-page.service';
import { DataIC } from '../models/infoContactConsulting.interface';
import { DataBussinesService } from '../models/bussinesService.interface';
import { IDataPlanC } from '../models/PlanConsulting.interface';
import { DataIagilTr } from '../models/AgilTransformationConsulting';

@Component({
  selector: 'app-consulting',
  templateUrl: './consulting.component.html',
  styleUrls: ['./consulting.component.scss']
})
export class ConsultingComponent {

  titles!:ITitleBannerPages;
  description!:IDescriptionBannerPages;
  banner!:BannerModel;
  dataConsulting!:DataIC;
  dataBussinesS!:DataBussinesService;
  dataPlanConsulting!:IDataPlanC;
  dataAgilTransCons!:DataIagilTr;

  constructor(private serv:ServicesPageService){

  }


  ngOnInit() {
    this.serv.getBannerPage().subscribe((res) => {
        this.titles=res.data[3].attributes.title_banner_pages;
        this.description=res.data[3].attributes.description_banner_pages;
this.banner= new BannerModel(res.data[3].attributes.img.data[0].attributes.formats.large.url,[this.titles.data[0].attributes.title,this.titles.data[1].attributes.title],[]);
this.serv.bannerPages$.next(this.banner);
});


this.getInfoContactConsultingService();
this.getBussinesService();
this.getPlanConsulting();
this.getAgilTransCons();

  }



  getInfoContactConsultingService(){

    this.serv.getInfoContactConsultingServ().pipe(
      map((res)=>{
        this.dataConsulting=res.data[0];
       return res;
      })

    ).subscribe(
      res=>{

        this.serv.infoConsultingServ$.next(this.dataConsulting);
      }


    );

      }


      getBussinesService(){

        this.serv.getBussinesServices().pipe(
          map((res)=>{
            this.dataBussinesS=res.data[0];
           return res;
          })

        ).subscribe(
          res=>{

            this.serv.bussinesServ$.next(this.dataBussinesS);
          }


        );

          }




      getPlanConsulting(){

        this.serv.getPlanConsulting().pipe(
          map((res)=>{
            this.dataPlanConsulting=res.data[0];
           return res;
          })

        ).subscribe(
          res=>{

            this.serv.planConsulServ$.next(this.dataPlanConsulting);
          }


        );

          }




      getAgilTransCons(){

        this.serv.getAgilTransConsul().pipe(
          map((res)=>{
            this.dataAgilTransCons=res.data[0];
           return res;
          })

        ).subscribe(
          res=>{

            this.serv.agilTransConsServ$.next(this.dataAgilTransCons);
          }


        );

          }



}
