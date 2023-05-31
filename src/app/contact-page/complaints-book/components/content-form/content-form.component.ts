import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ComplaintsBookModel } from '../../../models/complaints-book.model'
import { ComplaintsBookService } from '../../services/complaints-book.service';
import Swal from 'sweetalert2';
import { IInfoComplaintsBook } from 'src/app/contact-page/models/info-complaints-book.interface';
import { Observable } from 'rxjs';
import { InfoComplaintsBookService } from '../../services/info-complaints-book.service';
@Component({
  selector: 'app-content-form',
  templateUrl: './content-form.component.html',
  styleUrls: ['./content-form.component.scss']
})
export class ContentFormComponent implements OnInit  {

  infocomplain$!:Observable<IInfoComplaintsBook>

  
  @Input() lista!: ComplaintsBookModel;
  form!: FormGroup;
  

  constructor(private fb: FormBuilder, private serv: ComplaintsBookService, private servicepage: InfoComplaintsBookService) {
    this.createForm();
  }


  ngOnInit():void{

    this.infocomplain$= this.servicepage.getInfoComplaintsBook();

  }

  validarForm() {
    if (
      this.form.get('fecha')?.valid &&
      this.form.get('numerodoc')?.valid &&
      this.form.get('persona')?.valid &&
      this.form.get('nombre')?.valid &&
      this.form.get('telefono')?.valid &&
      this.form.get('email')?.valid &&
      this.form.get('direccion')?.valid &&
      this.form.get('descripcion')?.valid &&

      this.form.get('tiposol')?.valid &&
      this.form.get('tipodoc')?.valid &&

      this.form.get('numerodocpersona')?.valid &&
      this.form.get('tipodocpersona')?.valid &&

      this.form.get('mensaje')?.valid) {
      return true;
    }
    return false;
  }

  createForm() {
    this.form = this.fb.group({
      numerodoc :  ['', Validators.pattern('^[0-9]{8}$')],
      persona: ['', [Validators.required, Validators.minLength(5)]],    
      nombre: ['', [Validators.required, Validators.minLength(5)]],
      telefono: ['', Validators.pattern('^[0-9]{9}$')],
      email: ['', [Validators.required, Validators.email]],
      direccion: ['', [Validators.required, Validators.minLength(5)]],
      descripcion: ['', [Validators.required]],
      mensaje: ['', [Validators.required]],
      fecha: ['', [Validators.required, this.fechaMaximaValidator]],
      
      tiposol: ['', [Validators.required]],
      tipodoc: ['', [Validators.required]],

      numerodocpersona:['', Validators.pattern('^[0-9]{8}$')],
      tipodocpersona:  ['', [Validators.required]],
      




    })
  }

  fechaMaximaValidator(control: FormControl) {
    const fechaIngresada = new Date(control.value);
    const fechaHoy = new Date();
  
    if (control.value && fechaIngresada > fechaHoy) {
      return { fechaInvalida: true };
    }
  
    return null;
  }

  

  sendForm() {
    
    if (this.validarForm()) {
      
      let objeto = {
        "data":{
      
          'numerodoc':this.form.get('numerodoc')?.value,
          'persona':this.form.get('persona')?.value,
          'nombre':this.form.get('nombre')?.value,
          'telefono':this.form.get('telefono')?.value,
          'email':this.form.get('email')?.value,
          'direccion':this.form.get('direccion')?.value,
          'descripcion':this.form.get('descripcion')?.value,
          'mensaje':this.form.get('mensaje')?.value,
          'fecha':this.form.get('fecha')?.value,

          'tiposol':this.form.get('tiposol')?.value,
          'tipodoc':this.form.get('tipodoc')?.value,

          'numerodocpersona':this.form.get('tiposol')?.value,
          'tipodocpersona':this.form.get('tipodoc')?.value

        }
      }
      console.log(objeto);

      this.serv.postComplaintInfo(objeto).subscribe({
        next: (response) => {
          this.showAlertSuccess();
          this.form.reset();
        },
        error: () => {
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
