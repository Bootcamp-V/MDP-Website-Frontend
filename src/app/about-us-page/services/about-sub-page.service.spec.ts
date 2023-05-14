import { TestBed } from '@angular/core/testing';

import { AboutSubPageService } from './about-sub-page.service';

describe('AboutSubPageService', () => {
  let service: AboutSubPageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AboutSubPageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
