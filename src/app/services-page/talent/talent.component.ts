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





  steps: stepsModel = new stepsModel(
    ['https://cdn-icons-png.flaticon.com/512/45/45180.png'],
    '¿Cómo funciona?',
    'Nuestro método ha sido perfeccionado con la experiencia de más de 11 años que llevamos ofreciendo este servicio, llegando a completar los requerimientos en menos de 8 días útiles y todo de manera digital a través de nuestra plataforma DOM.',
    [
      'Requerimiento y cuestionario inicial',
      'Selección y reclutamiento',
      'Aprobación e inicio',
    ],
    [
      'Todo empieza con una necesidad, al contactarnos un service manager analizará el perfil y completará junto a usted un cuestionario que nos permita conocer en profundidad el perfil ideal para solucionar su necesidad.',
      'Con el cuestionario completo nuestros profesionales de reclutamiento seleccionarán a los candidatos ideales preparándoles una lista ideal de 1 a 3 postulantes para una entrevista personal, de los cuales podrá seleccionar uno o más de ellos.',
      'Finalizadas las entrevistas, usted podrá seleccionar el mejor candidato y nosotros nos encargamos de la contratación e inducción para que inicie el trabajo en el menor tiempo posible (sujeto a la disponibilidad del colaborador)',
    ]
  );




}
