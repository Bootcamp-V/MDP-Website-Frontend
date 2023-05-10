import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerAboutComponent } from './banner-about.component';

describe('BannerAboutComponent', () => {
  let component: BannerAboutComponent;
  let fixture: ComponentFixture<BannerAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BannerAboutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BannerAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
