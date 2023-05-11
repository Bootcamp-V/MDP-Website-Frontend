import { map } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { BannerModel } from '../models/banner.model';
import { stepsModel } from '../models/steps.model';
import { InfoOffer, WeOffer } from '../models/we-offer-model';
import { ContactService } from '../models/contactService.model';
import { IDescriptionBannerPages, ITitleBannerPages } from '../models/bannerPages.interface';
import { ServicesPageService } from '../services/services-page.service';
import { DataOffer } from '../models/weOfferServices.model.interface';
import { DataInfoService } from '../models/infoContactService.interfrace';

@Component({
  selector: 'app-software-testing',
  templateUrl: './software-testing.component.html',
  styleUrls: ['./software-testing.component.scss'],
})
export class SoftwareTestingComponent implements OnInit{




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

        this.titles=res.data[2].attributes.title_banner_pages;
        this.description=res.data[2].attributes.description_banner_pages;

this.banner= new BannerModel(res.data[2].attributes.img.data[0].attributes.formats.large.url,[this.titles.data[0].attributes.title,this.titles.data[1].attributes.title],
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

          if(i.attributes.page=="Software Testing"){
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

              if(i.attributes.page=="Software Testing"){
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
    'No existe una ruta estricta al desarrollar soluciones para las organizaciones, esto es una de las características que nos hace diferentes, la flexibilidad, sin embargo, si seguimos patrones que nos permiten identificar qué modelo de servicio se adapta más a su necesidad específica, sea una solución puntual o un área específica (TI).',
    [
      'Reunion Inicial',
      'Analisis de las necesidades',
      'Presentacion al cliente',
    ],
    [
      'Todo empieza con una conversación, sea física o virtual en la que podamos conocerlos y entender el negocio y sus necesidades iniciales, los puntos de dolor que podemos ayudar a solucionar, lo que necesitan implementar o la gestión de la demanda.',
      'Nuestro equipo comercial junto a un equipo de especialistas analizan la información brindada en la reunión realizando investigaciones complementarias para definir la solución y bajo qué modelo (fábrica / proyecto) y sobre que marco (ágil / tradicional) se podría ejecutar para elaborar una estimación.',
      'Dependiendo de la solución, modelo y marco de trabajo seleccionado se realiza una presentación de nuestra propuesta o estimación para profundizar más sobre la alternativa seleccionada (alcance, tiempos y equipo necesario) para lograr acuerdos que nos lleven al inicio del servicio.',
    ]
  );






}
