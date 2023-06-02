import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {trigger,state,style,animate,transition} from '@angular/animations';

@Component({
  selector: 'app-comment-form-reply',
  templateUrl: './comment-form-reply.component.html',
  styleUrls: ['./comment-form-reply.component.scss'],
  animations: [
    trigger('slideFadeInOut', [
      state('in', style({ opacity: 1, transform: 'translateY(0)' })),
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-5%)' }),
        animate('500ms')
      ]),
      transition(':leave', [
        animate('500ms', style({ opacity: 0, transform: 'translateY(100%)' }))
      ])
    ])
  ]
})

export class CommentFormReplyComponent {
  formInfo!: FormGroup;
  isSubmitting = false;

  constructor(private fb: FormBuilder) {
    this.createForm();
  }
  createForm() {
    this.formInfo = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      mensaje: ['', [Validators.required]],
    })
  }

  validarForm() {

    if (this.formInfo.get('name')?.valid && this.formInfo.get('email')?.valid && this.formInfo.get('mensaje')?.valid) {
      return true;
    }
    return false;

  }
 
  sendForm() {

    if (this.validarForm()) {

      let object = {
        "data": {
          "name": this.formInfo.get('nombre')?.value,
          "date": new Date().toISOString(),
          "mensaje": this.formInfo.get('mensaje')?.value,
          "email": this.formInfo.get('email')?.value,
        }
      }
      console.log(object);

    }

  }
}
