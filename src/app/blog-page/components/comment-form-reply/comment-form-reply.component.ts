import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { BlogService } from '../../services/blog.service';
import Swal from 'sweetalert2';
import { DataBlogComment } from '../../model/comment.interface.model';

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

  @Input() comment!: DataBlogComment;

  constructor(private fb: FormBuilder, private servicio: BlogService) {
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
          "name": this.formInfo.get('name')!.value,
          "email": this.formInfo.get('email')!.value,
          "mensaje": this.formInfo.get('mensaje')?.value,
          "date": new Date().toISOString(),
          "favoritesCount": 0,
          "published": false,
          "blog": this.comment.attributes.blog,
          "blog_comment": [ this.comment]

        }

      }
      console.log(object);
      this.servicio.postCommentForm(object).subscribe({
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
