import { TestBed } from '@angular/core/testing';

import { ValuesVisionService } from './values-vision.service';

describe('ValuesVisionService', () => {
  let service: ValuesVisionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ValuesVisionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
