import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageOrganizationComponent } from './image-organization.component';

describe('ImageOrganizationComponent', () => {
  let component: ImageOrganizationComponent;
  let fixture: ComponentFixture<ImageOrganizationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImageOrganizationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageOrganizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
