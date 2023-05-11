import { Component, OnInit } from '@angular/core';
import { BannerInfo } from '../models/banner-info.model';
import { BannerInfoService } from '../services/banner-info.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {
  banner!: BannerInfo;
  constructor(private serv: BannerInfoService) {

  }

  ngOnInit() {
    this.serv.getBannersInfo().subscribe((res) => {

      console.log(res.data[3].attributes.title1);
      this.banner = new BannerInfo(res.data[3].attributes.img.data.attributes.formats.large.url, res.data[3].attributes.title1, res.data[3].attributes.title2, res.data[3].attributes.description);
    });

  }
}
