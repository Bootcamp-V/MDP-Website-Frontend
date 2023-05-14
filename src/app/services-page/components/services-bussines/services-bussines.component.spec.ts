import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesBussinesComponent } from './services-bussines.component';

describe('ServicesBussinesComponent', () => {
  let component: ServicesBussinesComponent;
  let fixture: ComponentFixture<ServicesBussinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicesBussinesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicesBussinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
