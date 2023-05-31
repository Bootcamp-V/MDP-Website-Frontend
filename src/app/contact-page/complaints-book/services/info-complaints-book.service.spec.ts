import { TestBed } from '@angular/core/testing';

import { InfoComplaintsBookService } from './info-complaints-book.service';

describe('InfoComplaintsBookService', () => {
  let service: InfoComplaintsBookService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InfoComplaintsBookService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
