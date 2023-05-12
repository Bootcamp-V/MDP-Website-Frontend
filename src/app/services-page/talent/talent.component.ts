import { Component, OnInit } from '@angular/core';
import { BannerModel } from '../models/banner.model';
import { stepsModel } from '../models/steps.model';
import { InfoOffer, WeOffer } from '../models/we-offer-model';
import { ContactService } from '../models/contactService.model';
import { IDescriptionBannerPages, ITitleBannerPages } from '../models/bannerPages.interface';
import { ServicesPageService } from '../services/services-page.service';
import { map } from 'rxjs';
import { DataOffer } from '../models/weOfferServices.model.interface';
import { DataInfoService } from '../models/infoContactService.interfrace';
import { DataStepsServices } from '../models/stepsService.interface';

@Component({
  selector: 'app-talent',
  templateUrl: './talent.component.html',
  styleUrls: ['./talent.component.scss'],
})
export class TalentComponent implements OnInit{

  titles!:ITitleBannerPages;
  description!:IDescriptionBannerPages;
  banner!:BannerModel;
  listoffer!:string[];
  dataOffer!:DataOffer;
  dataInfoServ!:DataInfoService;
  dataSteps!:DataStepsServices;

  constructor(private serv:ServicesPageService){

  }


  ngOnInit() {
    this.serv.getBannerPage().subscribe((res) => {

        this.titles=res.data[4].attributes.title_banner_pages;
        this.description=res.data[4].attributes.description_banner_pages;

this.banner= new BannerModel(res.data[4].attributes.img.data[0].attributes.formats.large.url,[this.titles.data[0].attributes.title,this.titles.data[1].attributes.title],
  [this.description.data[0].attributes.text]);
  this.serv.bannerPages$.next(this.banner);
    });
    this.getoffers();
    this.getInfoContactService();
    this.getStepsService();
  }


  getoffers(){

    this.serv.getWeOfferServices().pipe(
      map((res)=>{
        for(let i of res.data){

          if(i.attributes.page=="Talent"){
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

              if(i.attributes.page=="Talent"){
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



          getStepsService(){

            this.serv.getSteepsServices().pipe(
              map((res)=>{
                for(let i of res.data){

                  if(i.attributes.page=="Talent"){
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
