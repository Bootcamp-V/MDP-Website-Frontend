import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerContentRectangleComponent } from './banner-content-rectangle.component';

describe('BannerContentRectangleComponent', () => {
  let component: BannerContentRectangleComponent;
  let fixture: ComponentFixture<BannerContentRectangleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BannerContentRectangleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BannerContentRectangleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
