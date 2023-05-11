import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServicesPageService } from '../../services/services-page.service';

@Component({
  selector: 'app-contact-info-services',
  templateUrl: './contact-info-services.component.html',
  styleUrls: ['./contact-info-services.component.scss']
})
export class ContactInfoServicesComponent {

  formInfo!:FormGroup;

  constructor(private fb:FormBuilder, private serv:ServicesPageService){
    this.createForm();
      }


  createForm(){
    this.formInfo=this.fb.group({
  nombre: ['',[Validators.required,Validators.minLength(5)]],
  email:['',[Validators.required,Validators.email]],
  telefono:['',[Validators.required,Validators.pattern('[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]')]],
  empresa:['',[Validators.required]],
  mensaje:['',[Validators.required]],
    })
  }


  validarForm(){

    if(this.formInfo.get('nombre')?.valid && this.formInfo.get('email')?.valid && this.formInfo.get('telefono')?.valid && this.formInfo.get('empresa')?.valid && this.formInfo.get('mensaje')?.valid){
      return true;
    }
     return false;

    }


    sendForm(){

      if(this.validarForm()){
        console.log(this.formInfo.value);

        let objeto ={
          "data":{
            "nombre":this.formInfo.get('nombre')?.value,
             "email":this.formInfo.get('email')?.value,
             "telefono":this.formInfo.get('telefono')?.value,
             "empresa":this.formInfo.get('empresa')?.value,
              "mensaje":this.formInfo.get('mensaje')?.value,
          }
        }
    this.serv.postContactServicesConsulting(objeto);

      }else{
        console.log('Informacion no correcta');
      }

    }


}
