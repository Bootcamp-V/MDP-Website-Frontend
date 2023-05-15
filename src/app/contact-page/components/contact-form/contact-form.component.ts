import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent {
  formInfo!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.createForm();

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
    console.log(this.formInfo.value);

   /* if (this.validarForm()) {

      let objeto = {
        "data": {
          "nombre": this.formInfo.get('nombre')?.value,
          "email": this.formInfo.get('email')?.value,
          "telefono": this.formInfo.get('telefono')?.value,
          "empresa": this.formInfo.get('empresa')?.value,
          "mensaje": this.formInfo.get('mensaje')?.value,
        }
      }
      this.serv.postContactServicesConsulting(objeto).subscribe({
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
*/
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
