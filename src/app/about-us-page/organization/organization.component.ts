import { Component, OnInit } from '@angular/core';
import { BannerInfo } from '../models/banner-info.model';
import { BannerInfoService } from '../services/banner-info.service';

@Component({
  selector: 'app-organization',
  templateUrl: './organization.component.html',
  styleUrls: ['./organization.component.scss']
})
export class OrganizationComponent implements OnInit {
  banner!: BannerInfo;
  constructor(private serv: BannerInfoService) {

  }

  ngOnInit() {
    this.serv.getBannersInfo().subscribe((res) => {

      console.log(res.data[2].attributes.title1);
      this.banner = new BannerInfo(res.data[2].attributes.img.data.attributes.formats.large.url, res.data[2].attributes.title1, res.data[2].attributes.title2, res.data[2].attributes.description);
    });

  }
}
