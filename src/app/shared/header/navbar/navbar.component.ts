import { Component, OnInit } from '@angular/core';
import { NavbarService } from './services/navbar.service';
import { IPage } from './models/page.interface';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {

  pages !:IPage;
  
  constructor(private navService: NavbarService) {

  }
  ngOnInit() {
    this.navService.getPages().subscribe((res) => {
        this.pages = res;
        
    });
  }


}
 