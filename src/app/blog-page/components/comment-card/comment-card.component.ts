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

  comment!: DataBlogComment;
  contador: any;
  favorited: boolean = false;

  ngOnInit() {
    console.log("id comment card" + this.data);
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


    this.contador = this.data.attributes.favoritesCount;

  }
  constructor(private servicio: BlogService) {

  }

  onToggleFavorite() {
    this.favorited = this.favorited ? false : true;

    if (this.favorited) {

      this.contador++;
    }
    else {

      this.contador--;
    }
  }


}
