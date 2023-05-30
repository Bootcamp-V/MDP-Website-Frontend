import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-comment-form-reply',
  templateUrl: './comment-form-reply.component.html',
  styleUrls: ['./comment-form-reply.component.scss']
})

export class CommentFormReplyComponent {
  formInfo!: FormGroup;
  isSubmitting = false;
  comments: Comment[]=[

  ];

  constructor(private fb: FormBuilder, private router: Router,
    private route: ActivatedRoute,) {
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
  addComment() {
    const variable = this.route.snapshot.paramMap.get('id2');

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
