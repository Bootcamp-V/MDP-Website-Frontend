import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailBlogShareComponent } from './detail-blog-share.component';

describe('DetailBlogShareComponent', () => {
  let component: DetailBlogShareComponent;
  let fixture: ComponentFixture<DetailBlogShareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailBlogShareComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailBlogShareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
