import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent{

  searchOpen = false;
  iconName : string = 'fas fa-search';
  hover: boolean = false;
  
  toggleSearch() {
    this.searchOpen = !this.searchOpen;
    this.iconName = ( this.searchOpen ? 'fa fa-xmark':'fas fa-search')
  }
}
