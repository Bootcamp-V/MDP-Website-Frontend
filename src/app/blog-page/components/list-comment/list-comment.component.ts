import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DataBlogComment } from '../../model/comment.interface.model'
import { Observable } from 'rxjs';
import { BlogService } from '../../services/blog.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-comment',
  templateUrl: './list-comment.component.html',
  styleUrls: ['./list-comment.component.scss']
})
export class ListCommentComponent implements OnInit {
  @Input() id_blog!: number;

  formInfo!: FormGroup;
  isSubmitting = false;

  comments$!: Observable<DataBlogComment[]>;
  arrayComments: DataBlogComment[] = [];

  guardarDatos: boolean = false;

  ngOnInit() {

    this.getcomments();
  }

  constructor(private fb: FormBuilder, private servicio: BlogService) {
    this.comments$ = this.servicio.dataBlogComments$
    this.createForm();
  }

  getcomments() {
    this.servicio.getComments().subscribe(
      (res) => {

        for (let i of res.data) {

          if (i.attributes.blog.data.id == this.id_blog + 1) {
            this.arrayComments.push(i);
          }

        }
        console.log(this.arrayComments);
        this.servicio.dataBlogComments$.next(this.arrayComments);
        this.servicio.arraycomments = this.arrayComments;
      });
    console.log(this.arrayComments);
  }

  updateComments() {
    this.arrayComments = [];
    this.servicio.getComments().subscribe(
      (res) => {

        for (let i of res.data) {

          if (i.attributes.blog.data.id == this.id_blog + 1) {
            this.arrayComments.push(i);
          }

        }
        console.log(this.arrayComments);
        this.servicio.dataBlogComments$.next(this.arrayComments);
        this.servicio.arraycomments = this.arrayComments;
      });
    console.log(this.arrayComments);
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

    if (this.validarForm()) {

      let object = {
        "data": {
          "name": this.formInfo.get('name')!.value,
          "email": this.formInfo.get('email')!.value,
          "mensaje": this.formInfo.get('mensaje')?.value,
          "date": new Date().toISOString(),
          "favoritesCount": 0,
          "published": false,
          "blog": this.servicio.arrayblogs[this.id_blog]

        }

      }
      console.log(object);
      this.servicio.postCommentForm(object).subscribe({
        next: (response) => {
          this.showAlertSuccess();
          this.formInfo.reset();
          this.updateComments();
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
      title: 'Comentario enviado!',
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
  changeGuardarDatos() {
    this.guardarDatos = !this.guardarDatos;
    console.log(this.guardarDatos);
  }
}
