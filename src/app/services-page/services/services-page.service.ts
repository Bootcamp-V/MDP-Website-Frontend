import { HttpClient } from '@angular/common/http';
import { Injectable} from '@angular/core';
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
export class ServicesPageService {

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

  getWeOfferServices():Observable<IWeOffer>{
    return this.http.get<IWeOffer>(environment.devUrl+'/api/we-offer-services?populate=*');
  }

  getInfoContactServices():Observable<IInfoContactService>{
    return this.http.get<IInfoContactService>(environment.devUrl+'/api/info-contact-services?populate=*');
  }

  getInfoContactConsultingServ():Observable<IIContactInfoConsulting>{
    return this.http.get<IIContactInfoConsulting>(environment.devUrl+'/api/contact-info-consultings?populate=*');
  }

  getModelServices():Observable<IModelServicesC>{
    return this.http.get<IModelServicesC>(environment.devUrl+'/api/model-services?populate=*');
  }

  getSteepsServices():Observable<IStepsServices>{
    return this.http.get<IStepsServices>(environment.devUrl+'/api/steps-services?populate=*');
  }

  getBussinesServices():Observable<IBussinessService>{
    return this.http.get<IBussinessService>(environment.devUrl+'/api/bussines-services?populate=*');
  }

  getPlanConsulting():Observable<IPlanConsulting>{
    return this.http.get<IPlanConsulting>(environment.devUrl+'/api/plan-consultings?populate=*');
  }

  getAgilTransConsul():Observable<IAgilTransCons>{
    return this.http.get<IAgilTransCons>(environment.devUrl+'/api/agil-transformation-consultings?populate=*');
  }

  getAgilPathConsul():Observable<IAgilePathConsulting>{
    return this.http.get<IAgilePathConsulting>(environment.devUrl+'/api/agile-path-consultings?populate=*');
  }


  getTapeServConsul():Observable<ITapeServicesConsulting>{
    return this.http.get<ITapeServicesConsulting>(environment.devUrl+'/api/tape-services-consultings');
  }



  postContactServices( data:Object){
    return this.http.post(environment.devUrl+'/api/contact-service-forms',data,{responseType: 'text'});
  }


  postContactServicesConsulting( data:Object){
    return this.http.post(environment.devUrl+'/api/contact-service-consulting-forms',data,{responseType: 'text'});
  }

}
