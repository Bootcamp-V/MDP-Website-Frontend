import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagePurposeVisionComponent } from './image-purpose-vision.component';

describe('ImagePurposeVisionComponent', () => {
  let component: ImagePurposeVisionComponent;
  let fixture: ComponentFixture<ImagePurposeVisionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImagePurposeVisionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImagePurposeVisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
