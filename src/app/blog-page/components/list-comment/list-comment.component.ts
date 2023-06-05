import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DataBlogComment } from '../../model/comment.interface.model'
import { Observable } from 'rxjs';
import { BlogService } from '../../services/blog.service';
import Swal from 'sweetalert2';
import { Params, ActivatedRoute, Router } from '@angular/router';
import { DataBlog } from '../../model/blog.interface';

@Component({
  selector: 'app-list-comment',
  templateUrl: './list-comment.component.html',
  styleUrls: ['./list-comment.component.scss']
})
export class ListCommentComponent implements OnInit {

  formInfo!: FormGroup;
  isSubmitting = false;

  comments$!: Observable<DataBlogComment[]>;
  arrayComments: DataBlogComment[] = [];

  guardarDatos: boolean = false;
  updateDatos: boolean = false;

  id!:number;
  @Input() blog!: DataBlog;
  data!: DataBlog;
  ngOnInit() {

    this.rutaActiva.params.subscribe(
      (params: Params) => {
        this.id=+params['id'];
        this.data=this.servicio.arrayblogs[this.id];
  
      }
    );
   
     if(!this.data){
      this.servicio.getBlogs().subscribe(
        res=>{
          this.data=res.data[this.id];
        }
      );
     }

 
    this.getcomments();
 
  }

  constructor(private fb: FormBuilder, private rutaActiva: ActivatedRoute,private servicio:BlogService,private router:Router) {
    this.comments$ = this.servicio.dataBlogComments$
    this.createForm();
  }

  getcomments() {
   
    this.servicio.getComments().subscribe(
      (res) => {

        for (let i of res.data) {

          if (i.attributes.blog.data.id == this.blog.id) {
            this.arrayComments.push(i);
          }

        }

        this.servicio.dataBlogComments$.next(this.arrayComments);
        this.servicio.arraycomments = this.arrayComments;
      });

  }

  updateComments() {
    this.arrayComments = [];
    this.servicio.getComments().subscribe(
      (res) => {

        for (let i of res.data) {

          if (i.attributes.blog.data.id == this.blog.id) {
            this.arrayComments.push(i);
          }

        }
    
        this.servicio.dataBlogComments$.next(this.arrayComments);
        this.servicio.arraycomments = this.arrayComments;
      });
    this.updateDatos = false;
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
          "blog": this.servicio.arrayblogs[this.id]

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

  updateofResponse($event: boolean) {
    this.updateDatos = $event;
    this.updateComments();
    this.updateDatos = false;
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
    
  }
}
