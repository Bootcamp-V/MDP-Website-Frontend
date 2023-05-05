import { Component, OnInit } from '@angular/core';
import { IFooter } from './model/footer.model';
import { Observable } from 'rxjs';
import { FooterService } from './service/footer.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {

  footer$!:Observable<IFooter>;

  constructor(private serv: FooterService){

  }

    ngOnInit(): void {
    this.footer$=this.serv.getInfoFooter();
    }

    




}
