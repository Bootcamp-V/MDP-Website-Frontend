import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import Swal from 'sweetalert2';
import { IdataContactUs } from '../../models/contactUs.interface.model';
import { ContactPageService } from '../../services/contact-page.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent {
  formInfo!: FormGroup;
  contactUS$!:Subject<IdataContactUs>;


  constructor(private fb: FormBuilder, private serv:ContactPageService) {
    this.createForm();
    this.contactUS$=this.serv.contactUs$;
  }

  createForm() {
    this.formInfo = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(5)]],
      email: ['', [Validators.required, Validators.email]],
      telefono: ['', [Validators.required, Validators.pattern('^[0-9]{9}$')]],
      asunto: ['', [Validators.required]],
      mensaje: ['', [Validators.required]],
      privacidad: [false],
    })
  }


  validarForm() {

    if (this.formInfo.get('nombre')?.valid && this.formInfo.get('email')?.valid && this.formInfo.get('telefono')?.valid && this.formInfo.get('asunto')?.valid && this.formInfo.get('mensaje')?.valid) {
      return true;
    }
    return false;

  }


  sendForm() {

   if (this.validarForm()) {

      let object = {
        "data": {
          "nombre": this.formInfo.get('nombre')?.value,
          "email": this.formInfo.get('email')?.value,
          "telefono": this.formInfo.get('telefono')?.value,
          "asunto": this.formInfo.get('asunto')?.value,
          "mensaje": this.formInfo.get('mensaje')?.value,
          "policy": this.formInfo.get('privacidad')?.value,
        }
      }
      console.log(object);
      this.serv.postContactUsForm(object).subscribe({
        next: (response) => {
          this.showAlertSuccess();
          this.formInfo.reset();
        },
        error: (error) => {
          this.showAlertError('Ocurrio un error al hacer la peticion!');
        }

      });

    } else {
      this.showAlertError('Datos Incorrectos!');
    }

  }

  showAlertSuccess() {
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Enviado!',
      showConfirmButton: false,
      timer: 1500
    })
  }


  showAlertError(title: string) {
    Swal.fire({
      position: 'top-end',
      icon: 'error',
      title: title,
      showConfirmButton: false,
      timer: 1500
    })
  }



}
