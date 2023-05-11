import { Component, OnInit } from '@angular/core';
import { BannerInfo } from '../models/banner-info.model';
import { BannerInfoService } from '../services/banner-info.service';

@Component({
  selector: 'app-certifications',
  templateUrl: './certifications.component.html',
  styleUrls: ['./certifications.component.scss']
})
export class CertificationsComponent implements OnInit {
  banner!: BannerInfo;
  constructor(private serv: BannerInfoService) {

  }
  ngOnInit() {
    this.serv.getBannersInfo().subscribe((res) => {

      console.log(res.data[1].attributes.title1);
      this.banner = new BannerInfo(res.data[1].attributes.img.data.attributes.formats.large.url, res.data[1].attributes.title1, res.data[1].attributes.title2, res.data[1].attributes.description);
    });

  }
}
