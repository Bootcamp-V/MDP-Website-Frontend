import { Component, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ComplaintsBookModel } from '../../../models/complaints-book.model'
@Component({
  selector: 'app-content-form',
  templateUrl: './content-form.component.html',
  styleUrls: ['./content-form.component.scss']
})
export class ContentFormComponent {
  @Input() lista!:ComplaintsBookModel;
  form!:FormGroup;

  constructor(private fb:FormBuilder){
this.createForm();
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
telefono:['',[Validators.required]],
mensaje:['',[Validators.required]],
  })
}

sendForm(){
  if(this.validarForm()){
    console.log(this.form);
  }else{
    console.log('revice los campos de entrada');
  }
}
}
