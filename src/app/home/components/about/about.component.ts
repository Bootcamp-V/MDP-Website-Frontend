import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ContentHomeService } from '../../services/content-home.service';
import { IContentHome } from '../../models/content-home.interface';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  dataHome$!: Observable<IContentHome>;
  constructor(private serv: ContentHomeService) {}
  ngOnInit() {
    this.dataHome$ = this.serv.getContentHomeByLocate('somos-mdp');
  }
}
