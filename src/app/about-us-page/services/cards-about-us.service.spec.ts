import { TestBed } from '@angular/core/testing';

import { CardsAboutUsService } from './cards-about-us.service';

describe('CardsAboutUsService', () => {
  let service: CardsAboutUsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CardsAboutUsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
