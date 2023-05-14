import { TestBed } from '@angular/core/testing';

import { ContainerAboutService } from './container-about.service';

describe('ContainerAboutService', () => {
  let service: ContainerAboutService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContainerAboutService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
