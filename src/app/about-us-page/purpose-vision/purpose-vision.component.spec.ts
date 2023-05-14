import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurposeVisionComponent } from './purpose-vision.component';

describe('PurposeVisionComponent', () => {
  let component: PurposeVisionComponent;
  let fixture: ComponentFixture<PurposeVisionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PurposeVisionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PurposeVisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
