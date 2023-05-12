import { Component, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ContactService } from '../../models/contactService.model';
import { ServicesPageService } from '../../services/services-page.service';
import { Observable } from 'rxjs';
import { DataInfoService } from '../../models/infoContactService.interfrace';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contactservices',
  templateUrl: './contactservices.component.html',
  styleUrls: ['./contactservices.component.scss']
})
export class ContactservicesComponent {
  infoCS$!:Observable<DataInfoService>;
  @Input() lista!:ContactService;
  form!:FormGroup;

  constructor(private fb:FormBuilder, private serv:ServicesPageService){
this.createForm();
this.infoCS$=this.serv.infoContactService$;
  }



 validarForm(){

  if(this.form.get('nombre')?.valid && this.form.get('email')?.valid && this.form.get('telefono')?.valid && this.form.get('mensaje')?.valid){
    return true;
  }
   return false;

  }





createForm(){
  this.form=this.fb.group({

nombre: ['',[Validators.required,Validators.minLength(5)]],
email:['',[Validators.required,Validators.email]],
telefono:['',[Validators.required,Validators.pattern('[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]')]],
mensaje:['',[Validators.required]],

  })
}

sendForm(){

  if(this.validarForm()){
    console.log(this.form.value);

    let objeto ={
      "data":{
        "nombre":this.form.get('nombre')?.value,
         "email":this.form.get('email')?.value,
         "telefono":this.form.get('telefono')?.value,
          "mensaje":this.form.get('mensaje')?.value,
      }
    }
this.serv.postContactServices(objeto);
this.showAlertSuccess();


  }else{
    console.log('Informacion no correcta');
    this.showAlertError();
  }

}


showAlertSuccess(){
  Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: 'Enviado!',
    showConfirmButton: false,
    timer: 1500
  })
}


showAlertError(){
  Swal.fire({
    position: 'top-end',
    icon: 'error',
    title: 'Datos Incorrectos!',
    showConfirmButton: false,
    timer: 1500
  })
}





}
