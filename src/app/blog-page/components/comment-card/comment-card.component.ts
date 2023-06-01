import { Component,  Input } from '@angular/core';
import { DataBlogComment } from '../../model/comment.interface.model'

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

  @Input()
  data!:DataBlogComment;
  contador:any;
  favorited :boolean =false;

  ngOnInit(): void {
    this.contador = this.data.attributes.favoritesCount;
    
  }

  onToggleFavorite() {
    this.favorited= this.favorited ? false : true;

    if (this.favorited) {

      this.contador++;
    }
    else {

      this.contador--;
    }
  }


}
