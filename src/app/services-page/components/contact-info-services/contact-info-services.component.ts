import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-info-services',
  templateUrl: './contact-info-services.component.html',
  styleUrls: ['./contact-info-services.component.scss']
})
export class ContactInfoServicesComponent {

  formInfo!:FormGroup;

  constructor(private fb:FormBuilder){
    this.createForm();
      }


  createForm(){
    this.formInfo=this.fb.group({
  nombre: ['',[Validators.required,Validators.minLength(5)]],
  email:['',[Validators.required,Validators.email]],
  telefono:['',[Validators.required]],
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
        console.log(this.formInfo);
      }else{
        console.log('revice los campos ');
      }

    }


}
