import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftwareTestingComponent } from './software-testing.component';

describe('SoftwareTestingComponent', () => {
  let component: SoftwareTestingComponent;
  let fixture: ComponentFixture<SoftwareTestingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoftwareTestingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SoftwareTestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
