import { TestBed } from '@angular/core/testing';

import { ContentHomeService } from './content-home.service';

describe('ContentHomeService', () => {
  let service: ContentHomeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContentHomeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
