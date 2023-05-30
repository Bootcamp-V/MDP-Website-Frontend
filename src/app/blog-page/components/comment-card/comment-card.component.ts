import { Component,  Input } from '@angular/core';
import { Comment } from '../../models/comment.interface.model'
@Component({
  selector: 'app-comment-card',
  templateUrl: './comment-card.component.html',
  styleUrls: ['./comment-card.component.scss']
})
export class CommentCardComponent {
  
  @Input()
  comment!: Comment;

  contador:any;
  favorited :boolean =false;

  ngOnInit(): void {
    this.contador = this.comment.favoritesCount;
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
