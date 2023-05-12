import { Component } from '@angular/core';
import { BannerModel } from '../models/banner.model';
import { stepsModel } from '../models/steps.model';
import { InfoOffer, WeOffer } from '../models/we-offer-model';
import { ContactService } from '../models/contactService.model';
import { IDescriptionBannerPages, ITitleBannerPages } from '../models/bannerPages.interface';
import { ServicesPageService } from '../services/services-page.service';
import { map } from 'rxjs';
import { DataOffer } from '../models/weOfferServices.model.interface';
import { DataInfoService } from '../models/infoContactService.interfrace';
import { IDataMSD } from '../models/modeServices.interface';
import { DataStepsServices } from '../models/stepsService.interface';

@Component({
  selector: 'app-software-development',
  templateUrl: './software-development.component.html',
  styleUrls: ['./software-development.component.scss'],
})
export class SoftwareDevelopmentComponent {



  titles!:ITitleBannerPages;
  description!:IDescriptionBannerPages;
  banner!:BannerModel;
  weOffer!:WeOffer;
  listoffer!:string[];
  dataOffer!:DataOffer;
  dataInfoServ!:DataInfoService;
  dataModelServ!:IDataMSD;
  dataSteps!:DataStepsServices;

  constructor(private serv:ServicesPageService){

  }


  ngOnInit() {
    this.serv.getBannerPage().subscribe((res) => {
        this.titles=res.data[1].attributes.title_banner_pages;
        this.description=res.data[1].attributes.description_banner_pages;

this.banner= new BannerModel(res.data[1].attributes.img.data[0].attributes.formats.large.url,[this.titles.data[0].attributes.title,this.titles.data[1].attributes.title],
  [this.description.data[0].attributes.text]);
  this.serv.bannerPages$.next(this.banner);
    });

    this.getoffers();
    this.getInfoContactService();
    this.getmodelsServices();
    this.getStepsService();
  }




  getoffers(){

this.serv.getWeOfferServices().pipe(
  map((res)=>{
    for(let i of res.data){

      if(i.attributes.page=="Software Development"){
        this.dataOffer=i;
      }

    }
  })

).subscribe(
  res=>{
    this.serv.weOff$.next(this.dataOffer);
  }

);

  }




  getInfoContactService(){

    this.serv.getInfoContactServices().pipe(
      map((res)=>{
        for(let i of res.data){

          if(i.attributes.page=="Software Development"){
            this.dataInfoServ=i;
          }

        }
      })

    ).subscribe(
      res=>{
        this.serv.infoContactService$.next(this.dataInfoServ);
      }


    );

      }






  getmodelsServices(){

    this.serv.getModelServices().pipe(
      map((res)=>{
        for(let i of res.data){

          if(i.attributes.page=="Software Development"){
            this.dataModelServ=i;
          }

        }
      })
    ).subscribe(
      res=>{
        this.serv.modelServ$.next(this.dataModelServ);
      }
    );
      }



      getStepsService(){

        this.serv.getSteepsServices().pipe(
          map((res)=>{
            for(let i of res.data){

              if(i.attributes.page=="Software Development"){
                this. dataSteps=i;
              }

            }
          })

        ).subscribe(
          res=>{
            this.serv.steepsServ$.next(this.dataSteps);
          }


        );

          }





}
