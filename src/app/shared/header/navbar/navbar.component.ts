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
  isOpen = false;
  iconName : string = "hamburger";
  menuClass : string = "menuppal";
  openSubmenu = false;
  constructor(private navService: NavbarService) {

  }
  ngOnInit() {
    this.navService.getPages().subscribe((res) => {
        this.pages = res;
        
    });
  }

  toogle() {
    this.isOpen= !this.isOpen;
    this.iconName = ( this.isOpen ? 'hamburger is-active':'hamburger');
    //this.menuClass = (this.menuClass ? 'menuppal' : 'menuppal is-active')
  }
  toogleSubMenu(){
    this.openSubmenu = !this.openSubmenu;
  }

}
 