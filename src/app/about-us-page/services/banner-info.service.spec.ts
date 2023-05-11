import { TestBed } from '@angular/core/testing';

import { BannerInfoService } from './banner-info.service';

describe('BannerInfoService', () => {
  let service: BannerInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BannerInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
