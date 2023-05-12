import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { IBannerPages, IDataBP } from '../models/bannerPages.interface';
import { environment } from 'src/environments/environment';
import { Subject, Observable } from 'rxjs';
import { DataOffer, IWeOffer } from '../models/weOfferServices.model.interface';
import { DataInfoService, IInfoContactService } from '../models/infoContactService.interfrace';
import { DataIC, IIContactInfoConsulting } from '../models/infoContactConsulting.interface';
import { IDataMSD, IModelServicesC } from '../models/modeServices.interface';
import { DataStepsServices, IStepsServices } from '../models/stepsService.interface';
import { DataBussinesService, IBussinessService } from '../models/bussinesService.interface';
import { IDataPlanC, IPlanConsulting } from '../models/PlanConsulting.interface';
import { DataIagilTr, IAgilTransCons } from '../models/AgilTransformationConsulting';
import { DataAgilPC, IAgilePathConsulting } from '../models/agilePathConsulting.interface';
import { ITapeServicesConsulting } from '../models/tapeServicesConsulting.interface';

@Injectable({
  providedIn: 'root'
})
export class ServicesPageService implements OnInit{

bannerPages$!:Subject<IDataBP>;

weOff$!:Subject<DataOffer>;
infoContactService$!:Subject<DataInfoService>;
infoConsultingServ$!:Subject<DataIC>;
modelServ$!:Subject<IDataMSD>;
steepsServ$!:Subject<DataStepsServices>;
bussinesServ$!:Subject<DataBussinesService>;
planConsulServ$!:Subject<IDataPlanC>;
agilTransConsServ$!:Subject<DataIagilTr>;
agilPathConsServ$!:Subject<DataAgilPC>;
tapeConsuServ$!:Subject<ITapeServicesConsulting>;


  constructor(private http:HttpClient) {

this.bannerPages$= new Subject();
this.weOff$= new Subject();
this.infoContactService$= new Subject();
this.infoConsultingServ$= new Subject();
this.modelServ$= new Subject();
this.steepsServ$= new Subject();
this.bussinesServ$= new Subject();
this.planConsulServ$= new Subject();
this.agilTransConsServ$= new Subject();
this.agilPathConsServ$= new Subject();
this.tapeConsuServ$= new Subject();



}


  ngOnInit(): void {
  }

  getBannerPage():Observable<IBannerPages>{
    return this.http.get<IBannerPages>(environment.baseUrl+'/api/banner-pages?populate=*');
  }

  getWeOfferServices():Observable<IWeOffer>{
    return this.http.get<IWeOffer>(environment.baseUrl+'/api/we-offer-services?populate=*');
  }

  getInfoContactServices():Observable<IInfoContactService>{
    return this.http.get<IInfoContactService>(environment.baseUrl+'/api/info-contact-services?populate=*');
  }

  getInfoContactConsultingServ():Observable<IIContactInfoConsulting>{
    return this.http.get<IIContactInfoConsulting>(environment.baseUrl+'/api/contact-info-consultings?populate=*');
  }

  getModelServices():Observable<IModelServicesC>{
    return this.http.get<IModelServicesC>(environment.baseUrl+'/api/model-services?populate=*');
  }

  getSteepsServices():Observable<IStepsServices>{
    return this.http.get<IStepsServices>(environment.baseUrl+'/api/steps-services?populate=*');
  }

  getBussinesServices():Observable<IBussinessService>{
    return this.http.get<IBussinessService>(environment.baseUrl+'/api/bussines-services?populate=*');
  }

  getPlanConsulting():Observable<IPlanConsulting>{
    return this.http.get<IPlanConsulting>(environment.baseUrl+'/api/plan-consultings?populate=*');
  }

  getAgilTransConsul():Observable<IAgilTransCons>{
    return this.http.get<IAgilTransCons>(environment.baseUrl+'/api/agil-transformation-consultings?populate=*');
  }

  getAgilPathConsul():Observable<IAgilePathConsulting>{
    return this.http.get<IAgilePathConsulting>(environment.baseUrl+'/api/agile-path-consultings?populate=*');
  }


  getTapeServConsul():Observable<ITapeServicesConsulting>{
    return this.http.get<ITapeServicesConsulting>(environment.baseUrl+'/api/tape-services-consultings');
  }



  postContactServices( data:Object){
    return this.http.post(environment.baseUrl+'/api/contact-service-forms',data).subscribe( res=> console.log(res));
  }


  postContactServicesConsulting( data:Object){
    return this.http.post(environment.baseUrl+'/api/contact-service-consulting-forms',data).subscribe( res=> console.log(res));
  }




}
