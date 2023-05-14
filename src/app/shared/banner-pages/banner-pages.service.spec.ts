import { TestBed } from '@angular/core/testing';

import { BannerPagesService } from './banner-pages.service';

describe('BannerPagesService', () => {
  let service: BannerPagesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BannerPagesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
