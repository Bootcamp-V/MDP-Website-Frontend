import { Component, Input } from '@angular/core';
import { DataBlogComment } from '../../model/comment.interface.model'
import { BlogService } from '../../services/blog.service';

@Component({
  selector: 'app-comment-card',
  templateUrl: './comment-card.component.html',
  styleUrls: ['./comment-card.component.scss']
})
export class CommentCardComponent {
  mostrarComponente = false;

  showCommentReply() {
    this.mostrarComponente = !this.mostrarComponente;
  }

  @Input() data!: DataBlogComment;

  id_comment!: number;
  comment!: DataBlogComment;
  contador: any;
  favorited: boolean = false;

  ngOnInit() {

    this.servicio.getCommentAllComments().subscribe(
      (res) => {
        console.log(res.data);
        for (let i of res.data) {

          if (i.id === this.data.id) {
            this.comment = i;
          }
        }
      }
    );

    this.id_comment = this.data.id;
    this.contador = this.data.attributes.favoritesCount;

  }
  constructor(private servicio: BlogService) {

  }

  onToggleFavorite() {
    this.favorited = this.favorited ? false : true;
    console.log("Favorite" + this.id_comment);
    if (this.favorited) {
      let objeto = {
        "data": {
          "favoritesCount": this.contador + 1
        }
      }
      
      try {
      
        this.servicio.updateLikesComments(objeto,this.id_comment).subscribe(
          (res)=>{
            this.contador++;
          }
        );
  
      } catch (error) {
        console.log(error);
      }

    }
    else {
      let objeto = {
        "data": {
          "favoritesCount": this.contador - 1
        }
      }
      
      try {
      
        this.servicio.updateLikesComments(objeto,this.id_comment).subscribe(
          (res)=>{
            this.contador--;
          }
        );
  
      } catch (error) {
        console.log(error);
      }

    }

  }


}