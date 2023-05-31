import { TestBed } from '@angular/core/testing';

import { RightsArcoService } from './rights-arco.service';

describe('RightsArcoService', () => {
  let service: RightsArcoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RightsArcoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
