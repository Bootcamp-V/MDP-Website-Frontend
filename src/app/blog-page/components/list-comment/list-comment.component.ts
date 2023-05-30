import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Comment } from '../../models/comment.interface.model'
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-comment',
  templateUrl: './list-comment.component.html',
  styleUrls: ['./list-comment.component.scss']
})
export class ListCommentComponent {
  formInfo!: FormGroup;
  isSubmitting = false;
  comments: Comment[]=[
    {
      'id': 1,
      'name': "Nadia Tinoco",
      'date' : new Date().toISOString(),
      'mensaje': "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut. ",
      'email': "lorenanadia@gmail.com",
      'favoritesCount' : 0 ,
      'published' : true
    },
    {
      'id': 2,
      'name': "Mariel Casaverde Rodriguez",
      'date' : new Date().toISOString(),
      'mensaje': "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut. ",
      'email': "s@gmail.com",

      'favoritesCount' : 12 ,
      'published' : true
    },
    {
      'id': 3,
      'name': "Positive Copany SAC",
      'date' : new Date().toISOString(),
      'mensaje': "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut. ",
      'email': "behappy@gmail.com",
      'favoritesCount' : 0 ,
      'published' : true
    },
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
    const comment:Comment = {
      id: 0,
      mensaje: this.formInfo.get('mensaje')!.value,
      date: new Date().toISOString(),
      name: this.formInfo.get('name')!.value,
      email: this.formInfo.get('email')!.value,
      favoritesCount: 0,
      published:false
    }

/*
    this.comentarioService.add(comment).subscribe({
      next: (data) => {
        this.snackBar.open('El comentario fue registrado con exito!', '', {
          duration: 3000,
        });
        this.commentForm.reset();
        this.ngOnInit();       
      },
      error: (err) => {
        this.snackBar.open('No se logro añadir!', '', {
          duration: 3000,
        });
        console.log(err);
      }
    });;
    window.location.reload();*/
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
      /*
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
*/
    }
    /*
    showAlertSuccess() {
      throw new Error('Method not implemented.');
    }
    showAlertError(arg0: string) {
      throw new Error('Method not implemented.');
    }
     */
  }
}