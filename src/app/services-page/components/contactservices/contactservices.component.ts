import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactService } from '../../models/contactService.model';

@Component({
  selector: 'app-contactservices',
  templateUrl: './contactservices.component.html',
  styleUrls: ['./contactservices.component.scss']
})
export class ContactservicesComponent {
  @Input() lista!:ContactService;
  form!:FormGroup;

  constructor(private fb:FormBuilder){
this.createForm();
  }


createForm(){
  this.form=this.fb.group({

nombre:['',Validators.required],
email:['',Validators.required],
telefono:['',Validators.required],
mensaje:['',Validators.required],

  })
}

sendForm(){
  console.log(this.form);
}





}
