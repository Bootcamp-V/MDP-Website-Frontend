import { Component, OnInit } from '@angular/core';
import { HeaderService } from './services/header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  phone!: string;
  isOpen !: boolean;
  constructor(private headerService: HeaderService) {

  }

  ngOnInit() {
    this.headerService.getHeader().subscribe((res) => {
      this.phone = res.data[0].attributes.phoneNumber;
    });
  }
  tooglePanel(opened: boolean) {
    this.isOpen = opened;
  }
}
