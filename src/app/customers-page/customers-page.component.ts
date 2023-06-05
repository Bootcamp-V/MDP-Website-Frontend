import { Component, OnInit } from '@angular/core';
import { IDataBP } from '../services-page/models/bannerPages.interface';
import { Observable, map } from 'rxjs';
import { BannerPagesService } from '../shared/banner-pages/banner-pages.service';
import { ICustomers } from './models/customers.interface';
import { CustomersService } from './services/customers.service';

@Component({
  selector: 'app-customers-page',
  templateUrl: './customers-page.component.html',
  styleUrls: ['./customers-page.component.scss']
})
export class CustomersPageComponent implements OnInit {
  banner!: IDataBP;

  cliBanca$!: Observable<ICustomers>;
  cliAseguradoras$!: Observable<ICustomers>;
  cliTelecomunicaciones$!: Observable<ICustomers>;
  cliRetail$!: Observable<ICustomers>;
  cliOtros$!: Observable<ICustomers>;

  constructor(private servicio:BannerPagesService, private serviceCustomers: CustomersService) {

  }


  ngOnInit() {
    this.getBannerPage();

    this.cliBanca$ = this.serviceCustomers.getInfoCustomers('Banca');
    this.cliAseguradoras$ = this.serviceCustomers.getInfoCustomers('Aseguradoras y AFP´s');
    this.cliTelecomunicaciones$ = this.serviceCustomers.getInfoCustomers('Telecomunicaciones');
    this.cliRetail$ = this.serviceCustomers.getInfoCustomers('Retail');
    this.cliOtros$ = this.serviceCustomers.getInfoCustomers('Otros');

  }

  getBannerPage() {
    this.servicio.getBannerPage().pipe(
      map((res) => {
        for (let i of res.data) {

          if (i.attributes.page == "Customers") {
            this.banner = i;
          }

        }
      })

    ).subscribe((res) => {
      this.servicio.bannerPages$.next(this.banner);
    });
  }


}
