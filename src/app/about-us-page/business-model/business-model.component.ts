import { Component, OnInit } from '@angular/core';
import { BannerInfoService } from '../services/banner-info.service';
import { BannerInfo } from '../models/banner-info.model';

@Component({
  selector: 'app-business-model',
  templateUrl: './business-model.component.html',
  styleUrls: ['./business-model.component.scss']
})
export class BusinessModelComponent implements OnInit {
  banner!: BannerInfo;
  constructor(private serv: BannerInfoService) {

  }

  ngOnInit() {
    this.serv.getBannersInfo().subscribe((res) => {

      console.log(res.data[0].attributes.title1);
      this.banner = new BannerInfo(res.data[0].attributes.img.data.attributes.formats.large.url, res.data[0].attributes.title1, res.data[0].attributes.title2, res.data[0].attributes.description);
    });

  }
}
