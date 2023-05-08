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

  submenuClass : string = "sub-menupal";
  openSubmenuServices = false;
  openSubmenuAbout= false;
  openSubmenuContact = false;
  constructor(private navService: NavbarService) {

  }
  ngOnInit() {
    this.navService.getPages().subscribe((res) => {
        this.pages = res;
        
    });
  }

  toogle() {
    this.isOpen = !this.isOpen;
    this.iconName = ( this.isOpen ? 'hamburger is-active':'hamburger');
    this.menuClass = (this.isOpen ? 'menuppal is-active' : 'menuppal')
  }

  toogleSubMenuServices(){
    this.isOpen = true;
    this.openSubmenuServices = !this.openSubmenuServices;
    this.submenuClass= (this.openSubmenuServices ? 'sub-menupal is-active' : 'sub-menupal')
  }
  toogleSubMenuAbout(){
    this.isOpen = true;
    this.openSubmenuAbout = !this.openSubmenuAbout;
    this.submenuClass= (this.openSubmenuAbout ? 'sub-menupal is-active' : 'sub-menupal')
  }
  toogleSubMenuContact(){
    this.isOpen = true;
    this.openSubmenuContact = !this.openSubmenuContact;
    this.submenuClass= (this.openSubmenuContact ? 'sub-menupal is-active' : 'sub-menupal')
  }

}
 