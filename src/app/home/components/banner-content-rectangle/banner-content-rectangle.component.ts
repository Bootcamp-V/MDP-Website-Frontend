import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ContentHomeService } from '../../services/content-home.service';
import { IContentHome } from '../../models/content-home.interface';

@Component({
  selector: 'app-banner-content-rectangle',
  templateUrl: './banner-content-rectangle.component.html',
  styleUrls: ['./banner-content-rectangle.component.scss']
})
export class BannerContentRectangleComponent {
  dataHome$!: Observable<IContentHome>;
  constructor(private serv: ContentHomeService) {}
  ngOnInit() {
    this.dataHome$ = this.serv.getContentHomeByLocate('descriptionHome');
  }
}
