import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageFigureAboutUsComponent } from './image-figure-about-us.component';

describe('ImageFigureAboutUsComponent', () => {
  let component: ImageFigureAboutUsComponent;
  let fixture: ComponentFixture<ImageFigureAboutUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImageFigureAboutUsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageFigureAboutUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
