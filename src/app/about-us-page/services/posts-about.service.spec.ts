import { TestBed } from '@angular/core/testing';

import { PostsAboutService } from './posts-about.service';

describe('PostsAboutService', () => {
  let service: PostsAboutService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostsAboutService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
